import React, { useState } from 'react';
import './App.css';

const API_KEY = '27YlL+6OLO4xKhW87/Yjfw==eeqdTMN0BIh8F7Rg';  // Replace with your actual API key

function App() {
  const [make, setMake] = useState('');
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBikes = async () => {
    if (!make) return;
    setLoading(true);
    setError('');
    setBikes([]);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/motorcycles?make=${make}`,
        {
          headers: { 'X-Api-Key': API_KEY },
        }
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setBikes(data.slice(0, 5));  // Limit to top 5 bikes
      } else {
        setError('No data found.');
      }
    } catch (err) {
      console.error(err);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Motorbike Explorer</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter bike company (e.g., Yamaha)"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <button onClick={fetchBikes}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="bike-list">
        {bikes.map((bike, index) => (
          <div key={index} className="bike-card">
            <h2>{bike.make} {bike.model}</h2>
            <p><strong>Year:</strong> {bike.year}</p>
            <p><strong>Engine:</strong> {bike.engine}</p>
            <p><strong>Power:</strong> {bike.power}</p>
            <p><strong>Top Speed:</strong> {bike.top_speed} km/h</p>
            <p><strong>Torque:</strong> {bike.torque}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
