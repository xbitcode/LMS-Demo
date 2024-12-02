import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Button,
  Avatar,
  Badge,
  Input,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { FiMoreVertical, FiSearch } from 'react-icons/fi'

const students = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    courses: ['Web Development', 'UI/UX Design'],
    progress: 75,
    status: 'Active',
    joinDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    courses: ['Data Science', 'Machine Learning'],
    progress: 92,
    status: 'Active',
    joinDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    courses: ['Mobile Development'],
    progress: 45,
    status: 'Inactive',
    joinDate: '2023-03-10',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    courses: ['Web Development', 'Python Basics'],
    progress: 88,
    status: 'Active',
    joinDate: '2023-04-05',
  },
]

const Students = () => {
  return (
    <Box>
      <Heading mb={6}>Students</Heading>

      {/* Search and Filter */}
      <Flex gap={4} mb={6}>
        <Input
          placeholder="Search students..."
          maxW="300px"
        />
        <Button colorScheme="blue">Add New Student</Button>
      </Flex>

      {/* Students Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Student</Th>
            <Th>Email</Th>
            <Th>Courses</Th>
            <Th>Progress</Th>
            <Th>Status</Th>
            <Th>Join Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student) => (
            <Tr key={student.id}>
              <Td>
                <Flex align="center">
                  <Avatar size="sm" name={student.name} mr={2} />
                  {student.name}
                </Flex>
              </Td>
              <Td>{student.email}</Td>
              <Td>
                {student.courses.map((course, index) => (
                  <Badge
                    key={index}
                    colorScheme="blue"
                    mr={1}
                    mb={1}
                  >
                    {course}
                  </Badge>
                ))}
              </Td>
              <Td>{student.progress}%</Td>
              <Td>
                <Badge
                  colorScheme={student.status === 'Active' ? 'green' : 'red'}
                >
                  {student.status}
                </Badge>
              </Td>
              <Td>{student.joinDate}</Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<FiMoreVertical />}
                    variant="ghost"
                    size="sm"
                  />
                  <MenuList>
                    <MenuItem>View Profile</MenuItem>
                    <MenuItem>Edit Details</MenuItem>
                    <MenuItem>Send Message</MenuItem>
                    <MenuItem color="red.500">Remove Student</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Students
