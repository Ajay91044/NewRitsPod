import React, { useContext, useState } from 'react'
import { MyContext } from './Context/MyProvider';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


function Modal({ }) {
    const {isbool,ButtonText} = useContext(MyContext);

    return (
        <section style={{position:'sticky',top:'36px',marginTop:'10px' }}>
            {
                isbool && <Stack sx={{ width: '100%',fontSize:'8px'}} spacing={2}>
                <Alert severity="success">
                  <AlertTitle>{ButtonText}</AlertTitle>
                </Alert>
              </Stack>
            }
           

        </section>
    )
}

export default Modal

