import { Box, HStack, Image, Text, Heading, Button,Input, VStack} from '@chakra-ui/react'
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/poduct';

import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"



export default function ProductCard({product}) {
    const [updatedProduct, setUpdatedProduct] = React.useState(product)
    const {deleteProduct,updateProduct} = useProductStore();
    const HandelDeleteProduct = async(id) => {
        const res = await deleteProduct(id);
        console.log(res);
        
    }
    const HandelUpdateProduct = async(id, updatedProduct) => {
        const res = await updateProduct(id, updatedProduct);
        console.log(res);
        
    }

  return (
    <Box 
    shadow={"md"}
    radioGroup='lg'
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{transform:"scale(1.1)"}}
    >
    <Image src={product.image} alt={product.name} h={"48"} w={"full"} objectFit={"cover"} />
    <Box p={4}>
    <Heading as ={"h3"} size={"md"} mb={2}>{product.name}</Heading>
    <Text>{product.price}</Text>


    <HStack spacing={2}>
    <PopoverRoot>
    <PopoverTrigger asChild>
      <Button size={"sm"}>
        <FaEdit />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="medium">edit product</PopoverTitle>
          <Text my="4">
           you can edit Product name and price or picture here
          </Text>
          
            <VStack spacing="4">
          <Input placeholder="edite name" size="sm" 
          value={updatedProduct.name} 
          onChange={(e)=>setUpdatedProduct({...updateProduct,name:e.target.value})}/>
          <Input placeholder="edit price " size="sm" 
          value={updatedProduct.price}
          onChange={(e)=>setUpdatedProduct({...updateProduct,price:e.target.value})}/>
          <Input placeholder="edit image url" size="sm" 
          value={updatedProduct.image}
          onChange={(e)=>setUpdatedProduct({...updateProduct,image:e.target.value})}/>
          </VStack>
        <HStack mt="4">
            <Button colorScheme="blue" size="sm" onClick={()=>HandelUpdateProduct(product._id, updatedProduct)}>
                Update 
            </Button>
        </HStack>



        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
      <Button size={"sm"} onClick={()=>HandelDeleteProduct(product._id)}>
      <MdDeleteForever />

      </Button>

        </HStack>   

    </Box>
    

    </Box>
  )
}   
