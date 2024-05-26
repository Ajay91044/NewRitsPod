import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [isbool, setIsbool] = useState(false);
    const [ButtonText,setButtonText]=useState('')
    const [selectedRows, setSelectedRows] = useState({});
  const [allSelected, setAllSelected] = useState(false);
  let [isLogOpen,setIsLogOpen]=useState(false); 
  let [isScrapOpen,setIsScrapOpen]=useState(false);
  let [isDcCollectOpen,setIsDcCollectOpen]=useState(false);
  let [isAssembleOpen,setIsAssembleOpen]=useState(false);
  let [isChangeEquipmentOpen,setIsChangeEquipmentOpen]=useState(false);
  
  let [getToHomePage,setgetToHomePage]=useState('http://localhost:3000') 

    // Fetch button data from API or any other source and set it using setButtonData

    return (
        <MyContext.Provider value={{ isbool,setIsbool,ButtonText,setButtonText,
        selectedRows, setSelectedRows,
        allSelected, setAllSelected,
        isLogOpen ,setIsLogOpen,
        isScrapOpen,setIsScrapOpen,
        isDcCollectOpen,setIsDcCollectOpen,
        isAssembleOpen,setIsAssembleOpen,
        isChangeEquipmentOpen,setIsChangeEquipmentOpen}}>
            {children} 
        </MyContext.Provider>
    );
};

export default MyProvider;
