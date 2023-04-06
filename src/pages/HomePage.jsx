import { Box, Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';
import { motion } from 'framer-motion';

export default function HomePage() {
    const navigate = useNavigate();
    const { myContextState: port } = useContext(MyContext);
    const [playGame, setPlayGame] = useState(false);

    const MotionBox = motion(Box);

    const handleButtonPress = async () => {
        setPlayGame(true);
        const writer = port.writable.getWriter();
        const encoder = new TextEncoder();
        const data = "motor 0 moved";
        const arrayBuffer = encoder.encode(data);
        await writer.write(arrayBuffer);
        await writer.abort();
        console.log(JSON.stringify(data));
    };
    return (
        <Box height="100vh" width="100vw" alignItems="center" display="flex" justifyContent={"center"} backgroundColor="#080808">
            {playGame &&
                <MotionBox
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <iframe src="https://www.friv.com/z/games/tetrablocks/game.html" width="600" height="450" frameborder="0"></iframe>
                </MotionBox>
            }
            <Box position="absolute" bottom={10} height="10vh" width="100vw" paddingLeft={"10px"} justifyContent="space-between" paddingRight={"10px"} display="flex">
                <Button onClick={handleButtonPress}>Get Candy/Play Game</Button>
                <Button onClick={() => {
                    navigate("/");
                    port.close();
                }}>
                    Admin Page
                </Button>
            </Box>
        </Box>
    );
}
