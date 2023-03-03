import './App.css';
import { Box, Button, Text } from '@chakra-ui/react';

function App() {
  const handleButtonPress = async () => {
    try {
      console.log(navigator.serial);
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      const writer = port.writable.getWriter();
      // Send out data we don't care what it is
      const encoder = new TextEncoder();
      const data = "motor 0 moved";
      const arrayBuffer = encoder.encode(data);
      await writer.write(arrayBuffer);
      await writer.abort();
      console.log(JSON.stringify(data));
      port.close();
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Box h={"100vh"} w={"100vw"} bgColor="#15142A">
      <Box display={"flex"} position="absolute" top="20px" justifyContent={"center"} alignItems="center" w="100%">
        <Box>
          <Text color="white">
            Header
          </Text>
        </Box>
      </Box>
      <Box alignItems={"center"} justifyContent="center" width="100%" height={"100%"} display="flex">
        <Text color={"white"}>
          Body
        </Text>
      </Box>
      <Box display={"flex"} position="absolute" bottom="20px" alignItems="center" w="100%">
        <Button onClick={handleButtonPress}>Send Serial </Button>
      </Box>
    </Box>
  );
}

export default App;
