import { Center, Image } from "@chakra-ui/react";

export default function Header() {
    return (
            <Center
                h='20vh'                 
                bg="#FFF5EE"
                justifyContent={'center'}
            >
                <Image
                    src={"/Logo1.png"}
                    alt="Logo"
                    h='15rem'
                    mt='55px'
                />

            </Center>
    )
}