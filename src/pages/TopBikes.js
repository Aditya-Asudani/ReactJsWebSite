import React from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ['BMW', 'Triumph', 'Enfield'];

function TopBikes() {
  const navigate = useNavigate();

  const handleClick = (brand) => {
    navigate('/', { state: { brand } });
  };

  return (
    <div>
      <h1>Top Picks from Premium Brands</h1>
      <ul className="top-bike-list">
        {companies.map((brand) => (
          <li
            key={brand}
            className="top-bike-item"
            onClick={() => handleClick(brand)}
            style={{ cursor: 'pointer' }}
          >
            {brand}
          </li>
        ))}
      </ul>
      <p className="note">Click a brand above to view bikes on the Home page!</p>
    </div>
  );
}

export default TopBikes;
