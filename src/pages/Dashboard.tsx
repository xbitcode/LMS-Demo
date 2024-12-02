import {
  Box,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Card,
  CardBody,
  Progress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <Box>
      <Heading mb={6}>Dashboard</Heading>
      
      {/* Stats Grid */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={8}>
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Total Students</StatLabel>
              <StatNumber>1,284</StatNumber>
              <StatHelpText>+23% from last month</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Active Courses</StatLabel>
              <StatNumber>42</StatNumber>
              <StatHelpText>+12% from last month</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Completion Rate</StatLabel>
              <StatNumber>78%</StatNumber>
              <StatHelpText>+8% from last month</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Total Revenue</StatLabel>
              <StatNumber>$48,294</StatNumber>
              <StatHelpText>+18% from last month</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </Grid>

      {/* Recent Activity */}
      <Card mb={8}>
        <CardBody>
          <Heading size="md" mb={4}>Recent Activity</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Student</Th>
                <Th>Course</Th>
                <Th>Progress</Th>
                <Th>Last Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>John Smith</Td>
                <Td>Web Development</Td>
                <Td>
                  <Progress value={80} size="sm" colorScheme="green" />
                </Td>
                <Td>2 hours ago</Td>
              </Tr>
              <Tr>
                <Td>Sarah Johnson</Td>
                <Td>UI/UX Design</Td>
                <Td>
                  <Progress value={65} size="sm" colorScheme="blue" />
                </Td>
                <Td>4 hours ago</Td>
              </Tr>
              <Tr>
                <Td>Michael Brown</Td>
                <Td>Data Science</Td>
                <Td>
                  <Progress value={45} size="sm" colorScheme="yellow" />
                </Td>
                <Td>6 hours ago</Td>
              </Tr>
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Dashboard
