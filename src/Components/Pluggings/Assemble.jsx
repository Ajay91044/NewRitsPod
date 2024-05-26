import React, { useContext } from 'react';
import { MyContext } from '../Context/MyProvider';
import { Link } from 'react-router-dom';

const Assemble = () => {

  const handleOnclick = () => {
    // setIsAssembleOpen(false);
  }

  return (
    <>
      <style>{`
        .assemble-container {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .header h2 {
          margin: 0;
        }
        
        .close-button {
          background: none;
          border: none;
          color: blue;
          cursor: pointer;
          font-size: 16px;
          text-decoration: underline;
        }
        
        .info-bar {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }
        
        .highlight {
          font-weight: bold;
        }
        
        .scan-section {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .scan-section label {
          margin-right: 10px;
        }
        
        .scan-section input {
          margin-right: 10px;
          padding: 5px;
          width: 200px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        .scan-button, .clear-button {
          margin-right: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .scan-button {
          background-color: blue;
          color: white;
        }
        
        .clear-button {
          background-color: grey;
          color: white;
        }
        
        .table-container {
          width: 100%;
          overflow-x: auto;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
        }
        
        thead {
          background-color: #f9f9f9;
        }
        
        tbody tr {
          background-color: #fff;
        }
        
        tbody tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        
        td[colspan="5"] {
          text-align: center;
        }
      `}</style>
      <div className="assemble-container">
        <div className="header">
          <h2>ASSEMBLE</h2>
          <Link to='/' onClick={handleOnclick} className="close-button">Close</Link>
        </div>
        <div className="info-bar">
          <div>PCU: <span className="highlight">*02AC</span></div>
          <div>Operation: <span className="highlight">OP1</span></div>
          <div>Resource: <span className="highlight">_</span></div>
          <div>PCU Quantity: <span className="highlight">100</span></div>
          <div>Order: <span className="highlight">SHOP3</span></div>
        </div>
        <div className="scan-section">
          <label>Component To Scan:</label>
          <input type="text" />
          <button className="scan-button">Scan</button>
          <button className="clear-button">Clear</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Component Description</th>
                <th>Data Type</th>
                <th>Required Quantity</th>
                <th>Assembled Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">No data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Assemble;
