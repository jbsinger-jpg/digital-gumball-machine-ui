import './App.css';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

function App() {
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
      <Box display={"flex"} position="absolute" bottom="20px" justifyContent={"center"} alignItems="center" w="100%">
        <Box>
          <HStack gap="2" width={"100%"}>
            <Button>Send Serial </Button>
            <Text color="white">
              Footer
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box >
  );
}

export default App;
