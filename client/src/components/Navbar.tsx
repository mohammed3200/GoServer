import React from 'react'
import { Box, Flex, Button, useColorModeValue, useColorMode, Text, Container } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu"

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"900px"}>
            <Box
                bg={useColorModeValue("gray.200", "gray.700")}
                px={4}
                my={4}
                borderRadius={"5"}
            >
                <Flex justifyContent={"space-between"} px={5}>
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <img src='/react.png' alt='logo' width={50} height={50} />
                        <Text fontSize={"40"}>+</Text>
                        <img src='/go.png' alt='logo' width={50} height={50} />
                    </Flex>

                    <Flex alignItems={"center"} gap={3}>
                        <Text fontSize={"lg"} fontWeight={500}>
                            Tasks
                        </Text>
                        <Button
                            onClick={toggleColorMode} >
                            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )


}

export default Navbar