import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box, useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Students from './pages/Students'
import Assignments from './pages/Assignments'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      position="fixed"
      bottom={4}
      right={4}
      size="lg"
      colorScheme="blue"
      borderRadius="full"
      zIndex={1000}
    />
  )
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" minHeight="100vh">
          <Sidebar />
          <Box flex="1" bg="gray.50">
            <Navbar />
            <Box p={8}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/students" element={<Students />} />
                <Route path="/assignments" element={<Assignments />} />
              </Routes>
            </Box>
            <ThemeToggle />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
