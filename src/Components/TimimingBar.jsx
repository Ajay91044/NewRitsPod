import React, { useState, useEffect } from 'react';
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
import IosShareIcon from '@mui/icons-material/IosShare';

function TimingBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      setTime(timeString);
    };


    // Update the time immediately on mount
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section style={{marginTop:'10px'}}>
      <header style={{ width: '93%',textAlign: 'end'  }}>
        <small style={{marginRight:'3px'}}>{time}</small>
        {/* <FontAwesomeIcon icon="fa-regular fa-share-from-square" /> */}
        <IosShareIcon sx={{fontWeight:'200',fontSize:'20px'}} style={{fontWeight:'200',color:'084c96'}} />
      </header>
    </section> 
  ); 
}

export default TimingBar;
