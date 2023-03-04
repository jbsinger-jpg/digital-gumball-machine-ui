import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function AdminPage() {
  const navigate = useNavigate();
  const { setMyContextState: setPort } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleButtonPress = async () => {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      setPort(port);
      navigate('/home-page');

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    console.log("TODO: Handle Form Submission");
  };

  const handlePasswordRecovery = () => {
    console.log("TODO: Handle password recovery");
  };

  return (
    <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="#080808">
      <Box height="60%" width="40%" backgroundColor={"#2A2626"} alignContent={"center"} flexDir="column" gap={10} justifyContent={"space-evenly"} paddingRight="10" paddingLeft="10" display={"flex"} borderRadius={9}>
        <Input placeholder='Username' textColor={"white"} fontFamily="monospace" />
        <HStack space={2}>
          <Input placeholder='Password' textColor={"white"} fontFamily="monospace" type={showPassword ? "text" : "password"} />
          <Button onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? "Hide" : "Show"}</Button>
        </HStack>
        <HStack justifyContent="space-between" flexDir={"row"} width="100%">
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handlePasswordRecovery}>Forgot Password</Button>
        </HStack>
      </Box>
      <Box position="absolute" bottom={10} display="flex" justifyContent={"flex-start"} width="100%" paddingLeft="10px">
        <Button onClick={handleButtonPress}>Config Port</Button>
      </Box>
    </Box>
  )
}
