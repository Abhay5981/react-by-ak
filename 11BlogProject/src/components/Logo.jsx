import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div className="logo-container">
      <img
        src="/logo-no-background.png"
        className="w-16 mr-4 logo-img"
        alt="logo"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;
