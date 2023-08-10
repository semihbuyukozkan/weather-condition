import React from 'react';

function Background(props) {
  const backgroundImageMap = {
    'Clear': '../images/clear.jpg',
    'Clouds': '../images/clouds.jpg',
    'Fog': '../images/fog.jpg',
    'Rain': '../images/rain.jpg',
    'Snow': '../images/snow.jpg',
  };

  const backgroundImage = backgroundImageMap[props.weatherCondition] || '';
  
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;
