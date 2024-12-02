import {
  Box,
  Grid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Badge,
  HStack,
  SimpleGrid,
  Input,
  Select,
  Flex,
} from '@chakra-ui/react'

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    instructor: 'John Smith',
    level: 'Beginner',
    duration: '8 weeks',
    students: 234,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    price: '$99.99',
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    instructor: 'Sarah Johnson',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 189,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    price: '$89.99',
  },
  {
    id: 3,
    title: 'Data Science Essentials',
    instructor: 'Michael Brown',
    level: 'Advanced',
    duration: '10 weeks',
    students: 156,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    price: '$129.99',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    instructor: 'Emily Davis',
    level: 'Intermediate',
    duration: '12 weeks',
    students: 198,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    price: '$149.99',
  },
  {
    id: 5,
    title: 'Machine Learning Basics',
    instructor: 'David Wilson',
    level: 'Advanced',
    duration: '14 weeks',
    students: 145,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    price: '$199.99',
  },
  {
    id: 6,
    title: 'Python Programming',
    instructor: 'Lisa Anderson',
    level: 'Beginner',
    duration: '8 weeks',
    students: 267,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    price: '$79.99',
  }
]

const Courses = () => {
  return (
    <Box>
      <Heading mb={6}>Courses</Heading>

      {/* Filters */}
      <Flex gap={4} mb={8}>
        <Input placeholder="Search courses..." maxW="300px" />
        <Select placeholder="Category" maxW="200px">
          <option>Web Development</option>
          <option>Design</option>
          <option>Data Science</option>
          <option>Mobile Development</option>
        </Select>
        <Select placeholder="Level" maxW="200px">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Select>
      </Flex>

      {/* Course Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {courses.map((course) => (
          <Card 
            key={course.id} 
            overflow="hidden" 
            variant="outline"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <Box position="relative">
              <Image
                src={course.image}
                alt={course.title}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top={4}
                right={4}
                bg="blue.500"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                fontWeight="bold"
              >
                {course.price}
              </Box>
            </Box>
            <CardBody>
              <Stack spacing={3}>
                <Heading size="md">{course.title}</Heading>
                <Text color="gray.500">by {course.instructor}</Text>
                <HStack spacing={2}>
                  <Badge colorScheme="blue">{course.level}</Badge>
                  <Badge colorScheme="green">{course.duration}</Badge>
                  <Badge colorScheme="purple">{course.students} students</Badge>
                </HStack>
                <Button 
                  colorScheme="blue" 
                  mt={2}
                  _hover={{
                    transform: 'scale(1.05)',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Enroll Now
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Courses
