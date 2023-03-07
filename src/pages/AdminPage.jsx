import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

export default function AdminPage() {
  const navigate = useNavigate();
  const { setMyContextState: setPort } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonPress = async () => {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      setPort(port);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Signed in!");
        navigate('/home-page');
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      })
  };

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        console.log("Signed out!");
      })
      .catch(error => console.log(error))
  };

  return (
    <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="#080808">
      <Box height="60%" width="40%" backgroundColor={"#2A2626"} alignContent={"center"} flexDir="column" gap={10} justifyContent={"space-evenly"} paddingRight="10" paddingLeft="10" display={"flex"} borderRadius={9}>
        <Input
          placeholder='Email'
          textColor={"white"}
          fontFamily="monospace"
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
        />
        <HStack space={2}>
          <Input
            placeholder='Password'
            textColor={"white"}
            fontFamily="monospace"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <Button onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? "Hide" : "Show"}</Button>
        </HStack>
        <HStack justifyContent="space-between" flexDir={"row"} width="100%">
          <Button onClick={handleSignIn}>Sign in</Button>
          <HStack>
            <Button onClick={handleSignOut}>Sign out</Button>
          </HStack>
        </HStack>
      </Box>
      <Box position="absolute" bottom={10} display="flex" justifyContent={"flex-start"} width="100%" paddingLeft="10px">
        <Button onClick={handleButtonPress}>Config Port</Button>
      </Box>
    </Box>
  )
}
