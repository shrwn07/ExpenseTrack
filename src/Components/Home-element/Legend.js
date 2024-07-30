import React from 'react';

const Legend = ({ data, colors }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
      {data.map((entry, index) => (
        <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: colors[index % colors.length],
              marginRight: '10px',
            }}
          ></div>
          <span>{entry.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
