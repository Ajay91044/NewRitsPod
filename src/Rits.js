import logo from './logo.svg';
import './App.css';
import RitsNavBar from './Components/RitsNavBar';
import ButtonsNav from './Components/ButtonsNav';
import ThreeInput from './Components/ThreeInput';
import DataTable from './Components/TableWorKList';
import TimingBar from './Components/TimimingBar';
import Modal from './Components/Modal';
import { useState } from 'react';
import MyProvider from './Components/Context/MyProvider';
import TaggingSystem from './Components/Tagging';
import LoginPopup from './Components/Pluggings/LoginPopup.jsx'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'; // Import BrowserRouter as Router
import SingleButton from './Components/SingleButton.jsx';
import ScrapUnscarp from './Components/Pluggings/ScrapUnscrap.jsx';
import DcCollect from './Components/Pluggings/DcCollect.jsx';
import Assemble from './Components/Pluggings/Assemble.jsx';
import ChangeEquipmentStatus from './Components/Pluggings/ChangeEquipmentStatus.jsx';
import PnF from './PnF.jsx';

function Rits() {
    // let [isbool, setIsbool] = useState(false);


    return (
        <MyProvider>
            <div className="App">
                <header className="App-header">
                    {/* <SingleButton /> */}
                    <RitsNavBar />
                    <Modal/>
                    {/* <ScrapUnscarp /> */}
                    {/* <LoginPopup /> */}
                    {/* <DcCollect /> */}
                    {/* <TimingBar /> */}
                    <ThreeInput />
                    <ButtonsNav />
                    <DataTable />
                    {/* <div className='DynamicLayout' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <ChangeEquipmentStatus />
                    </div> */}
                </header>
            </div>
            <Outlet/>
        </MyProvider>
    );
}

export default Rits;
