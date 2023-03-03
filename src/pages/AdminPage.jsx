import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function AdminPage() {
  const navigate = useNavigate();
  // const [contextState, setContextState] = useState(null);

  const handleButtonPress = async () => {
    try {
      console.log(navigator.serial);
      // TODO: Test with genuine serial connection
      // const port = await navigator.serial.requestPort();
      // await port.open({ baudRate: 9600 });
      // setContextState({ port: "port" });

      navigate('/home-page');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider value={{ port: "port" }}>
      <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="blue">
        <Button onClick={handleButtonPress}>AdminPage</Button>
      </Box>
    </MyContext.Provider>
  )
}
