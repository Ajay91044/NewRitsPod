import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyProvider';

const ScrapUnscarp = () => {
    const [formData, setFormData] = useState({ activity: 'Scrap', pcu: '', comments: '' });
    const { isScrapOpen,setIsScrapOpen} = useContext(MyContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Perform action based on formData, e.g., send data to server
    };

    const handleClear = () => {
        setFormData({ activity: 'Scrap', pcu: '', comments: '' });
    };

    const handleClose = () => {
        // Logic to close the popup
        setIsScrapOpen(false)
    };

    return (
        <>
            <style>
                {`
                    .ScrapUnscarpForm {
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
                       
                        width: 60%;
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
                    .form-container {
                        display: flex;
                        justify-content: center;
                        margin: 20px;
                    }
                    table {
                        width: 100%;
                    }
                    .table-row {
                        margin-bottom: 10px;
                    }
                    .table-cell {
                        padding: 10px;
                    }
                    .buttons {
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                        gap: 10px;
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
           {isScrapOpen && <section className="ScrapUnscarpForm">
                <div className="container">
                    <div className="header">
                        <h4 style={{ margin: 0 }}>SCRAP/UNSCRAP</h4>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'right' }}>
                                            Activity: <span style={{ color: 'red' }}>*</span>
                                        </td>
                                        <td>
                                            <select
                                                name="activity"
                                                value={formData.activity}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '100%' }}
                                            >
                                                <option value="Scrap">Scrap</option>
                                                <option value="Unscarp">Unscarp</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'right' }}>
                                            PCU / Shop Order / Process Lot: <span style={{ color: 'red' }}>*</span>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="pcu"
                                                value={formData.pcu}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '100%' }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'right' }}>
                                            Comments:
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleChange}
                                                placeholder="Enter comments"
                                                style={{ width: '100%' }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="buttons">
                                <button type="submit">Retrieve</button>
                                <button type="submit">Scrap</button>
                                <button type="button" onClick={handleClear}>Clear</button>
                            </div>
                        </form>
                    </div>
                    <div className="close-button">
                        <button className="close-button-inner" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </section>}
        </>
    );
};

export default ScrapUnscarp;
