import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyProvider';

const LoginPopup = () => {
    const [formData, setFormData] = useState({ user: '', password: '' });
    const { isLogOpen, setIsLogOpen } = useContext(MyContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        // Perform login action, e.g., send data to server
    };

    const handleClear = () => {
        setFormData({ user: '', password: '' });
    };

    const handleOnclick = () => {
        setIsLogOpen(false);
    };

    return (
        <>
            {isLogOpen && (
                <section style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000
                }}>
                    <div style={{
                         borderRadius:'5px',
                        backgroundColor: 'white',
                        // border: '2px solid whitesmoke',
                        width: '75%',

                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 200,
                            fontFamily: 'sans-serif',
                            textAlign: 'center',
                            backgroundColor: '#124561',
                            height: '38px',
                            color: 'white',
    
                        }}>
                            <h4>LOG BUYOFF</h4>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '25px',
                            height:'50vh'
                        }}>
                            <form onSubmit={handleLogin}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ textAlign: 'right' }}>
                                                User: <span style={{ color: 'red' }}>*</span>
                                            </td>
                                            <td>
                                                <input
                                                    style={{ width: '60vh' }}
                                                    type="text"
                                                    name="user"
                                                    value={formData.user}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: 'right', }}>
                                                Password: <span style={{ color: 'red' }}>*</span>
                                            </td>
                                            <td>
                                                <input
                                                     style={{ width: '60vh' }}
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button style={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                        backgroundColor: 'white',
                                        border: '2px solid #1D62A8',
                                        color: '#1D62A8',
                                        marginRight: '10px'
                                    }} type="submit">Login</button>
                                    <button style={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                        backgroundColor: 'white',
                                        border: '2px solid #1D62A8',
                                        color: '#1D62A8'
                                    }} type="reset" onClick={handleClear}>Clear</button>
                                </div>
                            </form>
                        </div>
                        <div style={{
                            borderTop: '2px solid whitesmoke',
                            textAlign: 'end',
                            padding: '3px',
                            paddingRight:'10px'
                        }}>
                            <button onClick={handleOnclick} style={{
                                color: '#1D62A8',
                                backgroundColor: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                height:'33px'
                            }}>Close</button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default LoginPopup;
