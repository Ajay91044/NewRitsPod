import logo from './logo.svg';
import './App.css';
import RitsNavBar from './Components/RitsNavBar';
import ButtonsNav from './Components/ButtonsNav';
import ThreeInput from './Components/ThreeInput';
import TimimingBar from './Components/TimimingBar';
import DataTable from './Components/TableWorKList';
import TimingBar from './Components/TimimingBar';
import Modal from './Components/Modal';
import { useState } from 'react';
import MyProvider from './Components/Context/MyProvider';
import TaggingSystem from './Components/Tagging';
import LoginPopup from './Components/Pluggings/LoginPopup.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import SingleButton from './Components/SingleButton.jsx';
import ScrapUnscarp from './Components/Pluggings/ScrapUnscrap.jsx';
import DcCollect from './Components/Pluggings/DcCollect.jsx';

function App() {
  let [isbool, setIsbool] = useState(false);

  let HideTheThreeInputs = () => {
    if (!isbool) {

    }
  }

  return (
    <MyProvider>
        <div className="App">
          <header className="App-header">
      <Router> {/* Wrap the entire application with Router */}
            {/* <SingleButton /> */}
            <RitsNavBar />
            <Modal />
            <ScrapUnscarp/>
            <LoginPopup/>
            <DcCollect/>

            <TimingBar />
            <ThreeInput />
            <ButtonsNav />
            <DataTable />
            <Routes> 
              {/* <Route path="/R_START_SRV" element={<LoginPopup />} /> */}
              {/* <Route path="/R_COMPLT_SERVICE" element={< />} /> */}
              {/* <Route path="/R_SIGNOFF_SERVICE" element={<LoginPopup />} /> */}
              {/* <Route path="/R_ASSY" element={<LoginPopup />} /> */}
              <Route path="/R_DCCOLLECT" element={<DcCollect />} />
              {/* <Route path="/R_WORKINSTRUCTION_PLUGIN" element={<LoginPopup />} /> */}
              {/* <Route path="/R_CHANGE_EQUIPEMNT_STATUS" element={<LoginPopup />} /> */}
              <Route path="/R_SCRAP_UNSCRAP" element={< ScrapUnscarp/>} />
              <Route path="/R_LOG_BUYOFF" element={<LoginPopup />} />
              {/* // <Route path="/R_TOOL_LOG" element={<LoginPopup />} /> */}
            </Routes>
      </Router>
          </header>
        </div>
    </MyProvider>
  );
}

export default App;
