import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Stack,
  Text,
  Badge,
  Button,
  HStack,
  Progress,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import { FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const assignments = [
  {
    id: 1,
    title: 'Final Project: Portfolio Website',
    course: 'Web Development',
    dueDate: '2024-01-20',
    status: 'In Progress',
    progress: 60,
    submissions: 24,
    totalStudents: 35,
  },
  {
    id: 2,
    title: 'User Research Report',
    course: 'UI/UX Design',
    dueDate: '2024-01-15',
    status: 'Completed',
    progress: 100,
    submissions: 42,
    totalStudents: 42,
  },
  {
    id: 3,
    title: 'Data Analysis Project',
    course: 'Data Science',
    dueDate: '2024-01-25',
    status: 'Not Started',
    progress: 0,
    submissions: 0,
    totalStudents: 28,
  },
  {
    id: 4,
    title: 'Mobile App Prototype',
    course: 'Mobile Development',
    dueDate: '2024-01-18',
    status: 'In Progress',
    progress: 75,
    submissions: 15,
    totalStudents: 20,
  },
]

const Assignments = () => {
  return (
    <Box>
      <Heading mb={6}>Assignments</Heading>

      <Tabs>
        <TabList>
          <Tab>All Assignments</Tab>
          <Tab>In Progress</Tab>
          <Tab>Completed</Tab>
          <Tab>Not Started</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {assignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardBody>
                    <Stack spacing={4}>
                      <Box>
                        <HStack justify="space-between" mb={2}>
                          <Badge colorScheme="purple">{assignment.course}</Badge>
                          <Badge
                            colorScheme={
                              assignment.status === 'Completed'
                                ? 'green'
                                : assignment.status === 'In Progress'
                                ? 'yellow'
                                : 'red'
                            }
                          >
                            {assignment.status}
                          </Badge>
                        </HStack>
                        <Heading size="md" mb={2}>
                          {assignment.title}
                        </Heading>
                        <HStack color="gray.500" spacing={4}>
                          <HStack>
                            <Icon as={FiClock} />
                            <Text>Due: {assignment.dueDate}</Text>
                          </HStack>
                          <HStack>
                            <Icon as={
                              assignment.submissions === assignment.totalStudents
                                ? FiCheckCircle
                                : FiAlertCircle
                            } />
                            <Text>
                              {assignment.submissions}/{assignment.totalStudents} Submissions
                            </Text>
                          </HStack>
                        </HStack>
                      </Box>

                      <Progress
                        value={assignment.progress}
                        colorScheme={
                          assignment.progress === 100
                            ? 'green'
                            : assignment.progress > 50
                            ? 'yellow'
                            : 'red'
                        }
                        size="sm"
                      />

                      <HStack>
                        <Button variant="outline" flex={1}>
                          View Details
                        </Button>
                        <Button colorScheme="blue" flex={1}>
                          Grade Submissions
                        </Button>
                      </HStack>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <Text>In Progress Assignments</Text>
          </TabPanel>

          <TabPanel>
            <Text>Completed Assignments</Text>
          </TabPanel>

          <TabPanel>
            <Text>Not Started Assignments</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Assignments
