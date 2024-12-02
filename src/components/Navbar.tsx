import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon, BellIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor} px={8} py={4} borderBottom="1px" borderColor={borderColor}>
      <Flex justify="space-between" align="center">
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input placeholder="Search courses, assignments..." />
        </InputGroup>

        <Flex align="center" gap={4}>
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            fontSize="20px"
          />
          
          <Menu>
            <MenuButton>
              <Avatar size="sm" name="John Doe" src="/avatar-placeholder.jpg" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem color="red.500">Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
