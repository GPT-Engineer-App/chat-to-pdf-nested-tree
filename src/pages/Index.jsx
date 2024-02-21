import { Box, Button, Container, Flex, Heading, IconButton, Input, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaSearch, FaPlus, FaMinus, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="body" bg="gray.50" minH="100vh">
      <Flex as="header" bg="blue.500" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" color="white">
          Chat-to-PDF Interface
        </Heading>
        <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" variant="solid">
          Upload
        </Button>
      </Flex>

      <Container as="main" maxW="container.xl" pt={5} pb={5}>
        <Flex>
          <Box w="20%" bg="white" p={3} borderRadius="md" shadow="base">
            <Heading as="h3" size="md" mb={3}>
              Files
            </Heading>
            <List spacing={2}>
              <ListItem cursor="pointer">smartwatch_user_guide.pdf</ListItem>
              <ListItem cursor="pointer">CV.pdf</ListItem>
            </List>
          </Box>

          <Box flex="1" ml={5} bg="white" borderRadius="md" shadow="base">
            <Flex direction="column" h="100%">
              <Flex flexGrow="1" direction="column" p={3}>
                <Heading as="h3" size="md" mb={3}>
                  PDF Preview Window
                </Heading>
                <Text>SMART WATCH USER GUIDE</Text>
                <Flex mt={3} alignItems="center" justifyContent="space-between">
                  <IconButton icon={<FaMinus />} aria-label="Zoom out" />
                  <IconButton icon={<FaPlus />} aria-label="Zoom in" />
                  <IconButton icon={<FaArrowLeft />} aria-label="Previous page" />
                  <IconButton icon={<FaArrowRight />} aria-label="Next page" />
                </Flex>
              </Flex>

              <Button onClick={onOpen} mt={3} colorScheme="blue">
                Open Chat Interface
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to the PDF file, 'Smart Watch User Guide'!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>How can we assist you today?</Text>
            <List spacing={2}>
              <ListItem>Sample Question 1: "Where can I find how-to videos..."</ListItem>
              <ListItem>Sample Question 2: "Which phones are compatible..."</ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Input placeholder="Ask any question" mr={3} />
            <Button colorScheme="blue" onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex as="footer" bg="blue.500" p={4} justifyContent="center" alignItems="center">
        <Text color="white">© 2023 Chat-to-PDF Inc.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
