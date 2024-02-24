// eslint-disable-next-line no-unused-vars
import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { constants } from '../../config/constants';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp({...rest}) {
    return (
        
            <Button                    
                leftIcon={<FaWhatsapp />}
                sx={{
                    background: 'linear-gradient(to left, rgba(250, 128, 114, 0.5), #FFFFE0)',
                    '&:hover': {
                        background: 'linear-gradient(to left, #FFFFE0, rgba(250, 128, 114, 0.2))',
                    },
                }}
                {...rest}
                >               
             <Link
                    target='_blank'
                    href={`https://api.whatsapp.com/send?phone=${constants.contato.whatsapp}`}
                    
                >
                Agende sua primeira consulta
                </Link>
            </Button>
    );
}

export default Whatsapp;

export function Whatsapp1() {
    return (
        <Link 
            target='_blank'
            href={`https://api.whatsapp.com/send?phone=${constants.contato.whatsapp}`}
        >
            <Button                    
                mb={4}
                mt="30px"
                leftIcon={<FaWhatsapp />}
                sx={{
                    background: 'linear-gradient(to left, rgba(250, 128, 114, 0.5), #FA8072)',
                    '&:hover': {
                        background: 'linear-gradient(to left, #FA8072, rgba(250, 128, 114, 0.2))',
                    },
                }}
            >
                Agende sua primeira consulta
            </Button>
        </Link>
    );
}
