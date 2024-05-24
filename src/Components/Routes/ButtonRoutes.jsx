import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LoginPopup from '../Pluggings/LoginPopup'

function ButtonRoutes() {
  return ( 
    <div>
        <Router>
      <Routes>
        <Route path="/R_START_SRV" element={<LoginPopup/>} />
        <Route path="/R_COMPLT_SERVICE" element={< LoginPopup/>} />
        <Route path="/R_SIGNOFF_SERVICE" element={<LoginPopup />} />
        <Route path="/R_ASSY" element={<LoginPopup/>} />
        <Route path="/R_DCCOLLECT" element={<LoginPopup />} />
        <Route path="/R_WORKINSTRUCTION_PLUGIN" element={<LoginPopup />} />
        <Route path="/R_CHANGE_EQUIPEMNT_STATUS" element={<LoginPopup/>} />
        <Route path="/R_SCRAP_UNSCRAP" element={<LoginPopup />} />
        <Route path="/R_LOG_BUYOFF" element={<LoginPopup/>} />
        <Route path="/R_TOOL_LOG" element={<LoginPopup />} />
      </Routes>
    </Router>
    </div>
  )
}

export default ButtonRoutes
   