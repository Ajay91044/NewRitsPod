import logo from './logo.svg';
import './App.css';
import RitsNavBar from './Components/RitsNavBar';
import ButtonsNav from './Components/ButtonsNav';
import ThreeInput from './Components/ThreeInput';
import TimimingBar from './Components/TimimingBar';
import DataTable from './Components/TableWorKList';
import TimingBar from './Components/TimimingBar';
import Modal from './Components/Modal';
import { useContext, useState } from 'react';
import MyProvider, { MyContext } from './Components/Context/MyProvider';
import TaggingSystem from './Components/Tagging';
import LoginPopup from './Components/Pluggings/LoginPopup.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import SingleButton from './Components/SingleButton.jsx';
import ScrapUnscarp from './Components/Pluggings/ScrapUnscrap.jsx';
import DcCollect from './Components/Pluggings/DcCollect.jsx';
import Assemble from './Components/Pluggings/Assemble.jsx';
import ChangeEquipmentStatus from './Components/Pluggings/ChangeEquipmentStatus.jsx';
import PnF from './PnF.jsx';
import Rits from './Rits.js';

function App() {
  // let [isbool, setIsbool] = useState(false);

// let {isbool,setIsbool } = useContext(MyContext);




  return (
    <>     
              <Router>
            <Routes> 
              <Route path="/" element={<Rits />}>
              <Route path="dcCollect" element={<DcCollect />} />
              <Route path="Assemble" element={<Assemble/>} />
              <Route path="LoginPopup" element={<LoginPopup />} />
              {/* <Route path="/" element={<Sign />} /> */}
              {/* <Route path="/R_WORKINSTRUCTION_PLUGIN" element={<LoginPopup />} /> */}
              <Route path="changeEquipmentStatus" element={<ChangeEquipmentStatus />} />
              <Route path="ScrapUnscrap" element={< ScrapUnscarp/>} />
              <Route path="ToolLog" element={<LoginPopup />} />
            </Route>
            </Routes>
      </Router>
</>

  );
}

export default App;
