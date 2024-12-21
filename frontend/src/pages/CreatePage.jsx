import { Box, Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/poduct'
import { Toaster,toaster } from "@/components/ui/toaster"
function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''

  });

  const {createProduct}=useProductStore();
  const HandelAddProduct = async() => {
    const {success,message}=await createProduct(newProduct);
   
    if (!success) {
    
      console.log(message);
    }
    
  }
  return (
    <Container maxW={"1140px"}px={4}>
      <VStack spacing={8}>  
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
          </Heading>
          <Box w={"full"} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
              <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
              <input type="text" placeholder="Product Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
              <input type="text" placeholder="Product Image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>

              <Button colorScheme={"blue"} width={"full"} onClick={HandelAddProduct}>Create Product</Button>
              </VStack>
          </Box>


        </VStack>

 
     
      </Container>


  )
}


export default CreatePage