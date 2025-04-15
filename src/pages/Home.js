import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const API_KEY = '27YlL+6OLO4xKhW87/Yjfw==eeqdTMN0BIh8F7Rg';

function Home() {
  const location = useLocation();
  const [make, setMake] = useState('');
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state?.brand) {
      setMake(location.state.brand);
    }
  }, [location.state]);

  useEffect(() => {
    if (make) {
      fetchBikes();
    }
  }, [make]);

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
        const filtered = data
          .filter(bike => bike.power && /\d+/.test(bike.power))
          .map(bike => ({
            ...bike,
            numericPower: parseInt(bike.power.match(/\d+/)?.[0]) || 0,
          }))
          .sort((a, b) => b.numericPower - a.numericPower);

        setBikes(filtered.slice(0, 5));
      } else {
        setError('No data found.');
      }
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const openWikiPage = (make, model) => {
    const query = `${make} ${model}`.replace(/\s+/g, '+');
    const url = `https://en.wikipedia.org/wiki/Special:Search?search=${query}`;
    window.open(url, '_blank');
  };

  const renderCard = (bike, index) => (
    <div
      key={index}
      onClick={() => openWikiPage(bike.make, bike.model)}
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.2s',
        width: '100%',
        maxWidth: '350px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
    >
      <h2>{bike.make} {bike.model}</h2>
      <p><strong>Year:</strong> {bike.year}</p>
      <p><strong>Engine:</strong> {bike.engine}</p>
      <p><strong>Power:</strong> {bike.power}</p>
      <p><strong>Top Speed:</strong> {bike.top_speed} km/h</p>
      <p><strong>Torque:</strong> {bike.torque}</p>
    </div>
  );

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: "url('/assets/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '60px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '120px',
        }}
      >
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>
          Search for any bike
        </h1>

        {/* Search Input */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Enter bike name"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              borderRadius: '30px',
              border: '1px solid #ccc',
              marginRight: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              outline: 'none',
            }}
          />
          <button
            onClick={fetchBikes}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '30px',
              border: 'none',
              backgroundColor: '#3498db',
              color: 'white',
              cursor: 'pointer',
              marginTop: '5px',
            }}
          >
            Search
          </button>
        </div>

        {loading && <p style={{ marginTop: '20px' }}>Loading...</p>}
        {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

        {/* First row - 3 bikes */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            maxWidth: '1200px',
          }}
        >
          {bikes.slice(0, 3).map(renderCard)}
        </div>

        {/* Second row - 2 bikes (centered) */}
        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {bikes.slice(3, 5).map(renderCard)}
        </div>
      </div>
    </div>
  );
}

export default Home;
