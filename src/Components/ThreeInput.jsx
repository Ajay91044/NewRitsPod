import React, { useContext, useEffect, useState } from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import axios from 'axios';
import { MyContext } from './Context/MyProvider';

function ThreeInput() {
  const [Podname, setPodName] = useState('');
  const [quantity, setQuantity] = useState(false);
  const [dataSelectedFromOp1Table, setdataSelectedFromOp1Table] = useState('');

  const [inputs, setInputs] = useState({ PCU: '', user: '', operation: '', Resource: '', wc: '', quantity: '' });
  const { selectedRows, setSelectedRows, allSelected, setAllSelected } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('./data.json'); // Adjust the path if needed
        setPodName(data.type);
        setQuantity(data.showQuantity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const names = Object.values(selectedRows).filter(row => row.selected).map(row => row.name);
    setdataSelectedFromOp1Table(names.join(', '));
  }, [selectedRows]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with values:', inputs);
  };

  const handleReset = () => {
    setInputs({ PCU: '', user: '', operation: '', Resource: '', wc: '', quantity: '' });
  };

  console.log(selectedRows, "threeinput");

  return (
    <section style={{ marginTop: '20px', marginBottom: '5px', paddingBottom: '20px', borderBottom: '2px solid #F7F7F7' }}>
      <div className='Container' style={{ width: '93%' }}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className='InputContainer'>
            {(Podname === 'Operation' || Podname === 'PCU' || Podname === 'workcenter') && (
              <>
                {Podname === 'Operation' && (
                  <>
                    <div className='Inp1'>
                      <h5 style={{ fontWeight: '200' }}>PCU</h5>
                      <input
                        type="text"
                        name="PCU"
                        value={dataSelectedFromOp1Table}
                        onChange={handleChange}
                        placeholder='PCU'
                        className="input" />
                    </div>

                    <div className='Inp2'>
                      <h5 style={{ fontWeight: '200' }}>Operation:<small style={{ color: 'red' }}>*</small></h5>
                      <input
                        type="text"
                        name="operation"
                        value={inputs.operation}
                        onChange={handleChange}
                        placeholder='select'
                        className="input" />
                    </div>

                    <div className='Inp3'>
                      <h5 style={{ fontWeight: '200' }}>Resource:<small style={{ color: 'red' }}>*</small></h5>
                      <input
                        type="text"
                        name="Resource"
                        value={inputs.Resource}
                        onChange={handleChange}
                        placeholder='_'
                        className="input" />
                    </div>
                  </>
                )}

                {Podname === 'PCU' && (
                  <>
                    <div className='Inp1'>
                      <h5 style={{ fontWeight: '200' }}>PCU</h5>
                      <input
                        type="text"
                        name="PCU"
                        value={inputs.PCU}
                        onChange={handleChange}
                        placeholder='PCU'
                        className="input"
                      />
                    </div>
                    <div className='Inp2'>
                      <h5 style={{ fontWeight: '200' }}>User:<small style={{ color: 'red' }}>*</small></h5>
                      <input
                        type="text"
                        name="user"
                        value={inputs.user}
                        onChange={handleChange}
                        placeholder='user'
                        className="input"
                      />
                    </div>
                  </>
                )}

                {Podname === 'workcenter' && (
                  <>
                    <div className='Inp1'>
                      <h5 style={{ fontWeight: '200' }}>wc</h5>
                      <input
                        type="text"
                        name="Workcenter"
                        value={inputs.wc}
                        onChange={handleChange}
                        placeholder='Workcenter'
                        className="input"
                      />
                    </div>
                    <div className='Inp2'>
                      <h5 style={{ fontWeight: '200' }}>User:<small style={{ color: 'red' }}>*</small></h5>
                      <input
                        type="text"
                        name="user"
                        value={inputs.user}
                        onChange={handleChange}
                        placeholder='User'
                        className="input"
                      />
                    </div>
                  </>
                )}
              </>
            )}
            {quantity && (
              <>
                <div className='Inp4'>
                  <h5 style={{ fontWeight: '200' }}>Qty:</h5>
                  <input
                    style={{ width: '150px' }}
                    type="text"
                    name="quantity"
                    value={inputs.quantity}
                    onChange={handleChange}
                    placeholder=''
                    className="input"
                  />
                </div>
              </>
            )}

            <nav className='ButtonContainer'>
              <button type='submit' className='GoButton'>Go</button>
              <button type='reset' className='clearButton'>Clear</button>
            </nav>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ThreeInput;



            //  <nav className='ButtonContainer'>
            //   <button type='submit' className='GoButton'>Go</button>               
            //    <button type='reset' className='clearButton'>Clear</button>/               
            //     </nav>
            //   <div className='Inp4'>
            //       <h5 style={{fontWeight:'200'}}>Qty:</h5>
            //       <input type="text" name="" id="" placeholder='' />
            //   </div>

//     return (
//         <section style={{marginTop:'20px',marginBottom:'5px',paddingBottom:'20px',borderBottom:'2px solid #F7F7F7'}}>
//             <div className='Container' style={{width:'90%'}}>
//                <div className='InputContainer'>
//                <div className='Inp1'>
//                     <h5 style={{fontWeight:'200'}}>PCU</h5>
//                     <input type="text" name="" id="" placeholder='PCU' style={{ fontStyle: 'italic' }} />
//                 </div>
//                 <div className='Inp2'>
//                     <h5 style={{fontWeight:'200'}}>Operation:<small style={{ color: 'red' }}>*</small></h5>
//                     <input type="text" name="" id="" placeholder='select' />
//                 </div>
//                 <div className='Inp3'>
//                     <h5 style={{fontWeight:'200'}}>Resource:<small style={{ color: 'red' }}>*</small></h5>
//                     <input type="text" name="" id="" placeholder='_' />
//                 </div>
//                 <div className='Inp4'>
//                     <h5 style={{fontWeight:'200'}}>Qty:</h5>
//                     <input type="text" name="" id="" placeholder='' />
//                 </div>
//                </div>
//                <nav className='ButtonContainer'>
//                 <button type='submit' className='GoButton'>Go</button>
//                 <button type='reset' className='clearButton'>Clear</button>
//                </nav>

//             </div>

//         </section>
//     )
// }







// function ThreeInput() {
//     return (
//         <section style={{ marginTop: '20px', marginBottom: '5px', paddingBottom: '20px', borderBottom: '2px solid #F7F7F7' }}>
//             <div className='Container' style={{ width: '93%' }}>
//             <form>
//                  <div className='InputContainer'> 
//                          <div className='Inp1'>
//                             <h5 style={{ fontWeight: '200' }}>PCU</h5>
//                             <input type="text" placeholder='PCU' style={{ fontStyle: 'italic' }} />
//                         </div>
//                         <div className='Inp2'>
//                             <h5 style={{ fontWeight: '200' }}>Operation:<small style={{ color: 'red' }}>*</small></h5>
//                             <input type="text" placeholder='select' />
//                         </div>
//                         <div className='Inp3'>
//                             <h5 style={{ fontWeight: '200' }}>Resource:<small style={{ color: 'red' }}>*</small></h5>
//                             <input type="text" placeholder='_' />
//                         </div>
//                         <div className='Inp4'  >
//                             <h5 style={{ fontWeight: '200' }}>Qty:</h5>
//                             <input style={{width:'150px'}} type="text" placeholder='' />
//                         </div>
                             
//                         <nav className='ButtonContainer'>
//                             <button type='submit' className='GoButton'>Go</button>
//                             <button type='reset' className='clearButton'>Clear</button>
//                         </nav>              

//                 </div>


//                     </form>
//             </div>

//         </section>
//     )
// }

// export default ThreeInput
