import React, { useContext } from 'react';
import { MyContext } from '../Context/MyProvider';
import { Link } from 'react-router-dom';

const ChangeEquipmentStatus = () => {
  const { isChangeEquipmentOpen, setIsChangeEquipmentOpen } = useContext(MyContext);

  const handleOnclick = () => {
    setIsChangeEquipmentOpen(false);
  }

  return (
    <>
      <style>{`
        /* General styles */
        .change-equipment-status {
          width: 100%;
          border: 1px solid #ccc;
          padding: 20px;
          box-sizing: border-box;
          background-color: #f9f9f9;
        }
        
        /* Header styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .header h2 {
          margin: 0;
        }
        
        .close-button {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
          font-size: 16px;
        }
        
        /* Form styles */
        .form-container {
          margin-top: 20px;
        }
        
        .form-row {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .form-row label {
          width: 150px;
          font-weight: bold;
        }
        
        .form-row input,
        .form-row select {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box; /* Include padding and border in the width */
          width: calc(100% - 16px); /* Subtract padding from total width */
          max-width: 200px; /* Limit maximum width to prevent overflow */
        }
        
        /* Button styles */
        .update-button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 150px;
        }
      `}</style>
      <div className="change-equipment-status">
        <div className="header">
          <h2>CHANGE EQUIPMENT STATUS</h2>
          <Link to='/' onClick={handleOnclick} className="close-button">Close</Link>
        </div>
        <div className="form-container">
          <div className="form-row">
            <label>Operation:</label>
            <input type="text" value="OP1" readOnly />
          </div>
          <div className="form-row">
            <label>Select By:</label>
            <select>
              <option>Resource</option>
            </select>
          </div>
          <div className="form-row">
            <label>Work Center / Resource:</label>
            <input type="text" value="-" required />
          </div>
          <div className="form-row">
            <label>Status:</label>
            <input type="text" value="Unknown" readOnly />
          </div>
          <div className="form-row">
            <label>New Status:</label>
            <select>
              <option>Unknown</option>
            </select>
          </div>
          <div className="form-row">
            <label>Reason Code:</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Comments:</label>
            <input type="text" placeholder="Enter Text" />
          </div>
          <div className="form-row">
            <button className="update-button">Update Status</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeEquipmentStatus;
