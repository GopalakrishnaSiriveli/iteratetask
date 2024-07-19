import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon,Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import './navbar.css'
import { FaUser, FaEnvelope, FaPoo, FaWhatsapp, FaPhone  } from 'react-icons/fa';
 const LoginSection=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const [open,setOpen]=useState(false)
  return (
    <>
      
      <FaUser boxSize={8} onClick={onOpen}/>
      
        
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          margin-right='10px'
          margin-top="50px"
          padding='10px'
          position="absolute"
          top="15"
          right="0"
          borderRadius="0"
          height="90vh"
          width="350px"
        >
          <ModalHeader>Hello, Sri Mandir Bhakt</ModalHeader>
          <Text>Welcome to Sri Mandir Puja Seva</Text>
          <ModalCloseButton />
          <ModalBody>
            <Box >
              <Divider mb={4} />
              <Stack spacing={4}>
                <Box className='boxer'>
                  <Text fontWeight="bold">Account Details</Text>
                  <Stack spacing={3} mt={2}>
                    <Button variant="link" leftIcon={<Icon as={FaUser} />} ml='0px'> My profile</Button>
                    <Link to="/Content-2"><Button variant="link" leftIcon={<FaEnvelope />}> My Puja Bookings</Button></Link>
                    
                    <Button variant="link" leftIcon={<FaEnvelope />}> My Ramotsav Bookings</Button>
                    <Link to='/Content-2'> 
                    <Button variant="link" colorScheme="green" leftIcon={<FaPoo />}>
                    
                         Book a Puja
                      <Text as="span" color="green.500" ml={2}>
                        New
                      </Text>
                     
                     
                    </Button>
                    </Link>
                   
                  </Stack>
                </Box>
                <Divider />
                <Box >
                  <Text fontWeight="bold">Help & Support for Puja Booking</Text>
                  <Stack spacing={2} mt={2}>
                    <Button variant="link" >080-711-74417</Button>
                    <Text fontSize="sm"boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" padding='10px'>You can call us from 10:30 AM - 7:30 PM</Text>
                    <Button variant="link" leftIcon={<FaEnvelope />} boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" padding='10px'>Email us</Button>
                    <Button variant="link" leftIcon={<FaWhatsapp />}boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" padding='10px'>WhatsApp us</Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginSection;