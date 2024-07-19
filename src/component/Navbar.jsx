import { Box, Button, Flex, Heading, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

import { ChevronDownIcon, CalendarIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import LoginSection from './LoginSection';
import './navbar.css'
const Navbar = () => {
  return (
    <Flex  className='bar'as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
    <Flex align="center" spacing={2}>
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721390067/unnamed_lturh9.png" borderRadius={20} alt="Sri Mandir Logo" boxSize="40px" />
      <Box ml={2}>
        <Heading as="h1" size="lg" fontWeight="bold">Sri Mandir</Heading>
        <text>Puja Seva</text>
        
      </Box>
    </Flex>
    <HStack spacing={4}>
      <Link className='service'>Home</Link>
      <Link className='service'>Puja</Link>
      <Link className='service'>Panchang</Link>
      <Link className='service'>Temples</Link>
      <Link className='service'>Library</Link>
      <Box position="relative">
        <Button  className='button' >English v</Button>
      </Box>
    </HStack>
    <Button w={10} h={10}  borderRadius="full" display="flex" alignItems="center" justifyContent="center">
      <LoginSection/>
    </Button>
  </Flex>
  )
}

export default Navbar