import { Box, Button } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function HomePage() {
    const navigate = useNavigate();
    const { myContextState } = useContext(MyContext);

    const handleButtonPress = async () => {
        // // TODO: pass port context to see if works or not
        const writer = myContextState.writable.getWriter();
        // Send out data we don't care what it is
        const encoder = new TextEncoder();
        const data = "motor 0 moved";
        const arrayBuffer = encoder.encode(data);
        await writer.write(arrayBuffer);
        await writer.abort();
        console.log(JSON.stringify(data));
    };
    return (
        <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="purple">
            <Box position="absolute" bottom={10} height="10vh" width="100vw" paddingLeft={"10px"} justifyContent="space-between" paddingRight={"10px"} display="flex">
                <Button onClick={handleButtonPress}>Get Candy</Button>
                <Button onClick={() => {
                    navigate("/");
                    myContextState.close();
                }}>
                    Admin Page
                </Button>
            </Box>
        </Box>
    );
}
