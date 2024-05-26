import React, { useContext, useState } from 'react';
import { MyContext } from './Context/MyProvider';
import { Link, useNavigate } from 'react-router-dom'; // Import only useNavigate
import ButtonRoutes from './Routes/ButtonRoutes';
import axios from 'axios';

function SingleButton({ buttonLabel, url, text, pluginLocation, activity, type }) {

  const {setIsbool, setButtonText, IsLogOpen, setIsLogOpen, isScrapOpen, setIsScrapOpen, isDcCollectOpen, setIsDcCollectOpen, isAssembleOpen, setIsAssembleOpen, isChangeEquipmentOpen, setIsChangeEquipmentOpen } = useContext(MyContext);
  const navigate = useNavigate();

  let [urlLink, seturlLink] = useState('')

  const handleButtonClick = (activity, pluginLocation, type, url) => 
    {
    console.log(url)
    if (type === "Services")
       {     
      let fetchApi=async()=>
        {
          let {data}=await axios.get(url);
          let msg=data.message
          console.log(msg);
          setButtonText(msg);
          setIsbool(true);
          // seturlLink('/');
          setTimeout(() => {
            setIsbool(false);
          }, 5000);
          
        }
        fetchApi();
    
    }
   else if(type==='UI5')
    {
      const parts = url.split('/'); // Split the URL by '/'
      const lastPartIndex = parts.length - 1;
      const lastPartWithSlash = `${parts[lastPartIndex]}`; // Include the slash with the last part
     seturlLink(lastPartWithSlash);

    }

    console.log(`Button with label "${buttonLabel}" clicked. URL: ${url}`);
  };
  console.log(urlLink);

  return (
    <div>
      <Link to={urlLink} onClick={() => handleButtonClick(activity, pluginLocation, type, url)} className='SingleButton'>
        {buttonLabel}
      </Link>
    </div>
  );
}

export default SingleButton;
