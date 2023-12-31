import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { Whatsapp1 } from '../../components/Whatsapp';


export default function Vantagens() {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" overflow="hidden" w="100vw">
            <Box
                w="280px"
                h="700px"
                marginLeft="-95%"
                bg="#FA8072"
                transform="skew(20deg)"
                zIndex={1}
            ></Box>
            <Image
                src={process.env.PUBLIC_URL + "/Vantagens.png"}
                alt="Logo"
                style={{ zIndex: 2, marginTop: "-40%" }}
                marginLeft="-45%"
            />
            <Text
                fontFamily="'Century Gothic', sans-serif"
                fontStyle="italic"
                fontWeight="bold"
                fontSize='1.6rem'
                color="#FA8072"
                textAlign="right"
                marginRight="-35%"
                marginTop='-38%'
            >
                Entenda as Vantagens da Terapia On-line
            </Text>

            <Box display="flex" flexDirection="column" alignItems="center" mt="50px" marginLeft="50%">
                {/* Vantagem 1 */}
                <Box display="flex" alignItems="center" mb="20px">
                    <Box
                        width="50px"
                        height="50px"
                        backgroundColor="#FA8072"
                        marginRight="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                    >
                        1
                    </Box>
                    <Box
                        width="400px"
                        height="120px"
                        backgroundColor="#E0E0E0"
                        padding="10px"
                        textAlign="center"
                    >
                        <Text fontSize="1rem" color="#333333">
                            <strong>Acessibilidade:</strong> Permite aos pacientes a possibilidade de atendimentos psicológicos de qualquer lugar, eliminando barreiras geográficas e facilitando o atendimento a pessoas em regiões remotas.
                        </Text>
                    </Box>
                </Box>

                {/* Vantagem 2 */}
                <Box display="flex" alignItems="center" mb="20px">
                    <Box
                        width="50px"
                        height="50px"
                        backgroundColor="#FA8072"
                        marginRight="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                    >
                        2
                    </Box>
                    <Box
                        width="400px"
                        height="100px"
                        backgroundColor="#E0E0E0"
                        padding="10px"
                        textAlign="center"
                    >
                        <Text fontSize="1rem" color="#333333">
                            <strong>Respeito à Privacidade:</strong> Oferece a oportunidade de realizar sessões em ambientes confortáveis e privados, contribuindo com a segurança e confidencialidade.
                        </Text>
                    </Box>
                </Box>

                {/* Vantagem 3 */}
                <Box display="flex" alignItems="center" mb="20px">
                    <Box
                        width="50px"
                        height="50px"
                        backgroundColor="#FA8072"
                        marginRight="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                    >
                        3
                    </Box>
                    <Box
                        width="400px"
                        height="160px"
                        backgroundColor="#E0E0E0"
                        padding="10px"
                        textAlign="center"
                    >
                        <Text fontSize="1rem" color="#333333">
                            <strong>Adaptação a Necessidades Específicas:</strong> Atendimento online pode ser adaptado para atender às necessidades específicas de pacientes, incluindo aqueles com mobilidade reduzida ou condições de saúde que dificultam a presença física em um consultório.
                        </Text>
                    </Box>
                </Box>
                <Flex
                    ml="-100%"
                >
                    <Whatsapp1 style={{ flex: '1', minWidth: '0' }} />
                </Flex>


            </Box>
        </Box>
    );
}
