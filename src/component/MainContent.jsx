import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";

const MainContent = () => {
  return (

      <Box >
           <Flex bg="orange.50" justify="space-between" mt={{ base: 8, md: 16 }} py={{ base: 4, md: 6 }} px={{ base: 4, md: 16 }} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
        <Box width={{ base: "100%", md: "50%" }} mt={{ base: 12, md: 24 }} px={{ base: 4, md: 16 }}>
          <Flex textAlign="left" alignItems="center">
            <Image src="https://sri-mandir-clone.vercel.app/static/media/achievement.62495c645ad1c66b3e1a.webp" alt="Content Image" mr={4} />
            <Text fontSize="lg" >WORLD’S LARGEST APP FOR HINDU DEVOTEES</Text>
          </Flex>
          <Heading as="h2" fontWeight="bold" textAlign="left" fontSize={{ base: "2xl", md: "4xl" }} my={4}>
            Pray daily with <Box as="span" color="#f18c33">Sri Mandir</Box>.
            One App for all your devotional needs.
          </Heading>
          <HStack mt={4} spacing={4}>
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
          </HStack>
        </Box>
        <Box width={{ base: "100%", md: "60%" }} mt={{ base: 8, md: 0 }}>
          <Image src='https://res.cloudinary.com/dz7osr4ia/image/upload/v1721404294/Screenshot_2024-07-19_212108_mejvr0.png' alt="Image" height={{ base: "auto", md: "450px" }} width="100%" objectFit="cover" />
        </Box>
      </Flex>


      <Box mt={{ base: 12, md: 16 }} px={{ base: 4, md: 16 }}>
        <Heading as="h2" fontWeight="bold" fontSize={{ base: "2xl", md: "4xl" }} mb={8} textAlign="center">Explore Sri Mandir</Heading>
        <Flex  justify="center" gap={8}>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75" alt="Book Pujas at Temple" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Book Pujas at temples</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75" alt="Astro Services" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Talk to Astrologers</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75" alt="Chadhava" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Offer Chadhava at Temples</Text>
          </Box>
          <Box textAlign="center">
            <Image src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75' alt="Festivals" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Festival Details</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75" alt="Listen to Divine Music" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Listen to Divine Music</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75" alt="Do Mandir Darshan" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Do Mandir Darshan</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75" alt="Read Hindu Literature" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Hindu Literature</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75" alt="Read Panchang" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Panchang</Text>
          </Box>
        </Flex>
      </Box>


      <Box bg="slate.50" mt={{ base: 12, md: 16 }} py={{ base: 8, md: 16 }}>
        <Flex bg="#FAFAFA" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">Our Divine Mission Recognized by Prominent Media Outlets</Heading>
          <Flex  justify="center" pt={{ base: 8, md: 16 }} gap={8}>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75" alt="Mid-Day" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75" alt="YourStory" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75" alt="BW" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75" alt="ABP" width="100%" />
            </Box>
          </Flex>
        </Flex>
      </Box>

<Box bg="white" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
  <Box textAlign="center" mb={{ base: 8, md: 16 }}>
    <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>Puja Seva for You and Your Loved Ones</Heading>
    <Text fontSize="25px" text-align="center"  color="gray.600">Book Pujas in your and your family's name at 1000+ renowned temples in India. You will also receive a video of the Puja and Prasad along with divine blessings.</Text>
    <Button variant="link" fontSize="lg" fontWeight="bold" color="#F18912" mt={4} _hover={{ textDecoration: 'underline' }}>View All Puja →</Button>
  </Box>

  <Flex wrap="wrap" justify="center" gap={8}>
  <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721394016/1720883338524_nivzcx.webp" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">SATURDAY SHANI SIGNAPUR SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="black" fontWeight="bold" fontSize="lg">Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</Text>
        <p>For prevention of Misfortunes and Adversities</p>
      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="black">
          Shree Shanidev Temple, Shani Shingnapur, Maharashtra</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="black">Puja Date :
          20 July, Saturday, Ashadha Shukla Chaturdashi</Text>
        </Flex>
      
        <Button variant="solid" bg="green"  width="100%" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
    <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208690418.jpg&w=1920&q=75" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">MAHA VIDYA PURNIMA SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="black" fontWeight="bold" fontSize="lg">Maa Bagalamukhi Thantra Yuktha Havan</Text>
        <p>For Victory in Court Cases and Win over Enemies</p>
      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="black">
          Maa Bagalamukhi Temple, Haridwar, Uttarakhand</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="black">Puja Date :
          21 July, Sunday, Ashadha Shukla Chaturdashi</Text>
        </Flex>
      
        <Button variant="solid" bg="green"  width="100%" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
    <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720875578009.webp&w=1920&q=75" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">PURNIMA SHAKTHI PEETH NIGHT  SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="black" fontWeight="bold" fontSize="lg">Divya Mahakali Tantroktha Havan</Text>
        <p>For Courage and Protection from Obstacles</p>

      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="black">
          Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="black">Puja Date :
          20 July, Saturday, Ashadha Shukla Purnima -From 05:59 PM,</Text>
        </Flex>
      
        <Button variant="solid" bg="green" width="100%" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
 
  </Flex>
</Box>

{/* Puja Categories Section */}
<Box bg="slate.50" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
<Box textAlign="center" mb={{ base: 8, md: 16 }}>
    <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</Heading>
    <Text fontSize="25px" text-align="center"  color="gray.600">Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</Text>
    <Button variant="link" fontSize="lg" fontWeight="bold" color="#F18912" mt={4} _hover={{ textDecoration: 'underline' }}>Read All  →</Button>
  </Box>
  

  <Flex  justify="center" gap={1}>
    <Box textAlign="center" mx="2">
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721399263/aarti_article_image_dwfjgb.webp" alt="Puja Category 1" width={"350px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Arti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="2">
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721399137/chaalisa_article_image_bvpx9w.webp" alt="Puja Category 1" width={"300px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Chalisa</Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="2">
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721399137/mantra_article_image_xd29b6.webp" alt="Puja Category 1" width={"300px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Mantra </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Here you will find all the powerful mantras for peace of mind. Chant these mantras and remove all the obstacles from life.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="2">
      <Image src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1721399137/ayurvedic_article_image_lkfaea.webp" alt="Puja Category 1" width={"300px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Ayurvedic & Home Remedies </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">We have brought the precious knowledge of Ayurveda for you, these remedies will help you lead a healthy life.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
   
  </Flex>
  <img src='https://res.cloudinary.com/dz7osr4ia/image/upload/v1721399665/Screenshot_2024-07-19_200348_dfg9sl.png' width="100%" mx='auto'/>
</Box>

  
       
      </Box>
 

  
  )
}

export default MainContent