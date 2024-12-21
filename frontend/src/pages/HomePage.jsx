import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/poduct'
import ProductCard from '../components/ProductCard'

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  return (
    <Container maxW={"1140px"} px={4}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          Current Products
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={80} // Increased spacing between product cards
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            color={"gray.500"}
          >
            no product found{" "}
          </Text>
        )}
        <Link to={'/create'}>
          <Text as={"span"} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
            Add New Product
          </Text>
        </Link>
      </VStack>
    </Container>
  )
   
}

export default HomePage
