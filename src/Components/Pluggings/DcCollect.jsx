import React, { useContext } from 'react';
import { MyContext } from '../Context/MyProvider';

const DcCollect = () => {

    const {isDcCollectOpen,setIsDcCollectOpen} = useContext(MyContext);

    const handleClose = () => {
        // Logic to close the popup
        setIsDcCollectOpen(false)
    };

    return (
        <>
            <style>
                {`
                    .DcCollectForm {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.5);
                        z-index: 1000;
                    }
                    .container {
                        background-color: white;
                        width: 75%;
                        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                
                    }
                    .header {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 200;
                        font-family: sans-serif;
                        text-align: center;
                        background-color: #124561;
                        height: 50px;
                        color: white;
                    }
                    .content {
                        padding: 20px;
                    }
                    .table-container {
                        margin-top: 20px;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .table-container th, .table-container td {
                        border: 1px solid #ccc;
                        padding: 10px;
                        text-align: left;
                    }
                    .table-container th {
                        background-color: #f2f2f2;
                    }
                    .close-button {
                        border-top: 2px solid whitesmoke;
                        text-align: end;
                        padding: 5px;
                    }
                    .close-button-inner {
                        color: #1D62A8;
                        background-color: white;
                        border: none;
                        cursor: pointer;
                    }
                `}
            </style>
            {isDcCollectOpen && <section className="DcCollectForm">
                <div className="container">
                    <div className="header">
                        <h4 style={{ margin: 0 }}>DC Collect</h4>
                    </div>
                    <div className="content">
                        <div style={{ marginBottom: '20px' }}>
                            <span>PCU: <b>*02AC</b></span> &nbsp;&nbsp;
                            <span>Operation: <b>OP1</b></span> &nbsp;&nbsp;
                            <span>Resource: <b>_</b></span>
                        </div>
                        <div>DC Group List</div>
                        <table className="table-container">
                            <thead>
                                <tr>
                                    <th>DC Group</th>
                                    <th>Version</th>
                                    <th>DC Group Ref</th>
                                    <th>Collect At</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>No data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="close-button">
                        <button className="close-button-inner" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </section>}
        </>
    );
};

export default DcCollect;
