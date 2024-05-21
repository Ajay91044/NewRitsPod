import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleButton from './SingleButton';

function ButtonsNav(setIsbool) {
    const [dynamicData, setDynamicData] = useState([]);
    

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const {data} = await axios.get('./data.json'); // Adjust the path if needed
                setDynamicData(data.buttonList);
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }; 

        fetchData();
        console.log(dynamicData);
    }, []);

    return (
        <section>
            <div style={{ width: '90%' }}>
                <div className="ButtonsNav">
                    {dynamicData.map((button) => 
                    {                  
                      return  <SingleButton
                            key={button.sequence}
                            buttonLabel={button.buttonLabel}
                            url={button.activityList[0].url}
                            setIsbool={setIsbool}
                            text={button.buttonId}
                        />
                    })}
                </div>
                <div style={{ marginBottom: '8px', paddingLeft: '30px' }}>
                    <h3 style={{ fontWeight: '400' }}>Work List Panel</h3>
                </div>
                <hr />
            </div>
        </section>
    );
}

export default ButtonsNav;
