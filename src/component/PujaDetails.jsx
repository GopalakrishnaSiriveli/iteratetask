import React from 'react';
import {
  Box, Flex, Button, Text, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import { ArrowRightIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PujaDetails= () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Button onClick={onOpen} colorScheme="green" mt={2}>Participants </Button>
      <Modal width="300px" height="450px" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='grey' >
          <ModalHeader>
            <Flex w="full" justifyContent="center" alignItems="center">
              <Button variant="ghost" color="white" w={8} mx={0} onClick={onClose}>
              <FaArrowLeft />
              </Button>
              <Text fontSize="18px" color='white'fontWeight="bold" ml={2} >Fill your details for Puja
                
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box w="full" mb={4}>
              <Text fontSize="16px" color='white'fontWeight="bold">
                Enter Your Whatsapp Mobile Number
              </Text>
              <Text fontSize="12px" color="black.400" mb={2}>
                Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
              </Text>
              <FormControl>
                <FormLabel htmlFor="input-phone-number" color='white'>Your mobile Number</FormLabel>
                <Input
                  type="text"
                  id="input-phone-number"
                  inputMode="decimal"
                  maxLength="10"
                  
                  placeholder="Enter mobile number"
                  required
                  pl="10"
                  borderColor="black.300"
                  _focus={{ borderColor: "white.400", ring: "white.400" }}
                />
              </FormControl>
            </Box>

            <Box w="full" mb={4}>
              <FormControl>
                <FormLabel htmlFor="name" color='white'>Enter Your Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  inputMode="text"
                  maxLength="64"
                  placeholder="Enter your name"
                 required
                  borderColor="white.300"
                  _focus={{ borderColor: "white.400", ring: "white.400" }}
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Link to="/booking-form">
            <Button colorScheme="blue" mr={3} onClick={onClose} rightIcon={<ArrowRightIcon />}>
              Next
            </Button>
            </Link>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PujaDetails;
