import React, { useState } from 'react'
import ritslogo from './RITS_Logo.png'
import FactoryIcon from '@mui/icons-material/Factory';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// let logoStyle =

function RitsNavBar() {

    const [showLogout, setShowLogout] = useState(false);

    const toggleLogout = () => {
        setShowLogout(!showLogout);
    };

    const handleLogout = () => {
        alert('Logged out!');
        setShowLogout(false);
    };

    return (
        <nav className='ritsNav'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={ritslogo} className='ritslogo' style={{ width: "5vw", height: "4.6vh " }} alt="No image Available" />
                <small style={{ color: 'white', marginLeft: '15px' }}>POD</small>
            </div>

            <div>
                <small style={{ color: 'white', marginRight: '10px', fontStyle: 'none' }}>plants:RITS</small>
                <input style={{ height: '29px', width: '200px', fontStyle: 'italic' }} type="search" placeholder='Search In:Apps' />
            </div>


            <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', alignItems: 'center' }}>
                <FactoryIcon sx={{ paddingRight: '3px', fontSize: '20px', color: 'white' }} />
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
                        margin: '3px',
                        border: '2px solid #0A6ED1',
                        backgroundColor: '#0A6ED1',
                        borderRadius: '50%',
                        height: '30px',
                        width: '30px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }} onClick={toggleLogout}
                    >
                        <h1 style={{ fontSize: '15px', display: 'inline-block', color: 'white' }}>S</h1>
                    </div>
                    {showLogout && (
                        <div className="logout-option">
                            <button style={{ display: 'flex', gap: '2px' }} onClick={handleLogout}><PowerSettingsNewIcon sx={{ fontSize: 'small' }} /> Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default RitsNavBar  