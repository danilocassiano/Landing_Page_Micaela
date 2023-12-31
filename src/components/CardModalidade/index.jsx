import { Text, Box, Image, VStack } from "@chakra-ui/react";

const CardModalidade = ({ imagemSrc, texto, frase }) => {
    return (
        <Box>
            <VStack
                width="400px"
                height="900px"
                borderRadius="10px"
                overflow="hidden"
                bgGradient="linear(rgba(165, 42, 42, 0.8), rgba(165, 42, 42, 1))"
                mb="40px"
                mx="30px"
            >
                {imagemSrc && (
                    <Box
                        w="100%"
                        h={texto || frase ? "30%" : "100%"}
                        position="relative"
                        bg="rgba(165, 42, 42, 0.2)"
                        borderRadius="10px"
                    >
                        <Image
                            src={imagemSrc}
                            alt="Imagem"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            borderTopRadius="10px"
                        />

                        {frase && (
                            <Text
                                fontStyle="italic"
                                fontWeight="bold"
                                color="white"
                                fontSize="1.5rem"
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                whiteSpace="nowrap"
                                zIndex={400}
                            >
                                {frase}
                            </Text>
                        )}
                    </Box>
                )}

                {texto && (
                    <Box flex="1">
                        <Text mb="2" lineHeight="2" color="white" marginTop="1%" margin="5%" textAlign="center">
                            {texto}
                        </Text>
                    </Box>
                )}
            </VStack>
        </Box>
    );
};



export default CardModalidade;