
import { Button } from "@/components/ui/button"
import { Box, HStack } from "@chakra-ui/react"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/ui/Navbar"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    <Box minH={'100vh'} >
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/create" element={<CreatePage/>} />        
      </Routes>

    </Box>
    
    </>
  )
}

export default App