import { Box, Button, Input } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function AdminPage() {
  const navigate = useNavigate();
  const { setMyContextState } = useContext(MyContext);

  const handleButtonPress = async () => {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      setMyContextState(port);
      navigate('/home-page');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="blue">
      <Box height="60%" width="40%" backgroundColor={"red"} alignContent={"center"} flexDir="column" gap={10} justifyContent={"space-evenly"} paddingRight="10" paddingLeft="10" display={"flex"}>
        <Input placeholder='Username' />
        <Input placeholder='Password' />
      </Box>
      <Box position="absolute" bottom={10} display="flex" justifyContent={"flex-start"} width="100%" paddingLeft="10px">
        <Button onClick={handleButtonPress}>Config Port</Button>
      </Box>
    </Box>
  )
}
