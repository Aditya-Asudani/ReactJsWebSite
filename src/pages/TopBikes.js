import React from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ['BMW', 'Triumph', 'Enfield', 'Yamaha', 'Kawasaki'];

function TopBikes() {
  const navigate = useNavigate();

  const handleClick = (brand) => {
    navigate('/', { state: { brand } });
  };

  return (
    <div style={styles.container}>
      {/* Top Picks from Premium Brands section */}
      <h1 style={styles.heading}>Top Picks from Premium Brands</h1>
      <div style={styles.buttonContainer}>
        {companies.map((brand) => (
          <button
            key={brand}
            onClick={() => handleClick(brand)}
            style={styles.button}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* More Information Section */}
      <div style={styles.infoContainer}>
        <h2 style={styles.subheading}>More Information</h2>
        <div style={styles.infoList}>
          <p style={styles.infoText}>
            <strong>Most Expensive Bike:</strong>
            <a
              href="https://en.wikipedia.org/wiki/Neiman_Marcus_Limited_Edition_Fighter"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <em>Neiman Marcus Limited Edition Fighter</em>
            </a>
          </p>
          <p style={styles.infoText}>
            <strong>Fastest Bike:</strong>
            <a
              href="https://en.wikipedia.org/wiki/Kawasaki_Ninja_H2R"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <em>Kawasaki Ninja H2R</em>
            </a>
          </p>
          <p style={styles.infoText}>
            <strong>Oldest Motorcycle Brand:</strong>
            <a
              href="https://en.wikipedia.org/wiki/Royal_Enfield"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <em>Royal Enfield</em>
            </a>
          </p>
          <p style={styles.infoText}>
            <strong>Most Popular Brand (2025):</strong>
            <a
              href="https://en.wikipedia.org/wiki/Honda_motorcycles"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <em>Honda</em>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20px',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '36px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    width: '200px',
  },
  infoContainer: {
    textAlign: 'center',
    marginTop: '40px',
    width: '80%',
  },
  subheading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoText: {
    fontSize: '18px',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontStyle: 'italic',
  },
};

export default TopBikes;
