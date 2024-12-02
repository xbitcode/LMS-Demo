import { Box, VStack, Icon, Text, Link, Heading, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  FiHome,
  FiBook,
  FiUsers,
  FiClipboard,
  FiCalendar,
  FiMessageSquare,
  FiSettings,
} from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, label: 'Dashboard', path: '/' },
  { icon: FiBook, label: 'Courses', path: '/courses' },
  { icon: FiUsers, label: 'Students', path: '/students' },
  { icon: FiClipboard, label: 'Assignments', path: '/assignments' },
  { icon: FiCalendar, label: 'Schedule', path: '/schedule' },
  { icon: FiMessageSquare, label: 'Messages', path: '/messages' },
  { icon: FiSettings, label: 'Settings', path: '/settings' },
]

const Sidebar = () => {
  const location = useLocation()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const activeColor = useColorModeValue('blue.500', 'blue.300')
  const activeBg = useColorModeValue('blue.50', 'blue.900')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      w="280px"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={8}
      px={4}
    >
      <Heading size="md" mb={8} px={4}>
        LMS Platform
      </Heading>
      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            as={RouterLink}
            to={item.path}
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              display="flex"
              alignItems="center"
              px={4}
              py={3}
              borderRadius="md"
              bg={location.pathname === item.path ? activeBg : 'transparent'}
              color={location.pathname === item.path ? activeColor : undefined}
              _hover={{ bg: hoverBg }}
              transition="all 0.2s"
            >
              <Icon as={item.icon} mr={3} fontSize="18px" />
              <Text fontWeight="medium">{item.label}</Text>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  )
}

export default Sidebar
