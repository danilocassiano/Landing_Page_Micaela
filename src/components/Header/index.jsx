import { Center, Image } from "@chakra-ui/react";

export default function Header() {
    return (
            <Center
                h='10vh' 
                bg="#FFF5EE"
                justifyContent={'center'}
            >
                <Image
                    src={"/Logo1.png"}
                    alt="Logo"
                    h='10rem'
                />

            </Center>
    )
}