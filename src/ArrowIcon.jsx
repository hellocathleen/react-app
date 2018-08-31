import React from 'react';

function ArrowIcon(props) {
  const { windDirection } = props;
  const degrees = Math.round(windDirection);
  const style = `transform: ${degrees}deg`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='wind-data' style={{transform: 'rotate(' + degrees + 'deg)'}}>
      <path fill="none" d="M0 0h24v24H0V0z"/>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </svg>
  );
}

export default ArrowIcon;