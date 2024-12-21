import React from 'react'
import { Button, Container, Flex, HStack,Text } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <Container maxW={"1140px"}px={4}>
    <Flex      
      h={16} alignItems={'center'}
      justifyContent={'space-between'}
      direction={'row'}
      >
      
      <Text
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        color={"blue.500"}
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      <HStack spaciing={2} align={'center'}>
        <Link to={'/create'} >
          <Button>
            <FaPlus />
          </Button>
        
        </Link>
    

      </HStack>
      </Flex>

   


    

    </Container>
   
  )
}

export default Navbar