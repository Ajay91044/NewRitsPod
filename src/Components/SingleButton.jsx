import React, { act, useContext } from 'react';
import { MyContext } from './Context/MyProvider';
import { useNavigate } from 'react-router-dom'; // Import only useNavigate
import ButtonRoutes from './Routes/ButtonRoutes';

function SingleButton({ buttonLabel, url, text, pluginLocation,activity }) {
  
  const { setIsbool, setButtonText } = useContext(MyContext);
  const { IsLogOpen, setIsLogOpen } = useContext(MyContext);
  const { isScrapOpen,setIsScrapOpen} = useContext(MyContext);
  const {isDcCollectOpen,setIsDcCollectOpen} = useContext(MyContext);

  const navigate = useNavigate(); 
  

  // Rename navigate variable to avoid naming conflict
  // You can now access buttonData and use it as needed

  const handleButtonClick = (activity,pluginLocation) => {
    // Handle button click action here


    if (pluginLocation === '') {
      setIsbool(true);
      setButtonText(text);
    
    }
    console.log(activity);
    // else if(pluginLocation ==''||pluginLocation =="2"||pluginLocation =="3"||pluginLocation =="5"||pluginLocation =="99")
    // {  
    //   navigate(activity);
    // }
    switch(activity)
    {
      case "R_LOG_BUYOFF": setIsLogOpen(true);break;
      case "R_SCRAP_UNSCRAP":setIsScrapOpen(true);break;
      case "R_DCCOLLECT":setIsDcCollectOpen(true);break;

    }
  

    

    console.log(`Button with label "${buttonLabel}" clicked. URL: ${url}`);
  };
  setTimeout(() => {
    setIsbool(false);
  }, 5000);

  return (
    <div>
      <button onClick={() => handleButtonClick(activity,pluginLocation)} className='SingleButton'>
        {buttonLabel}
      </button>
    </div>
  );
}

export default SingleButton;
