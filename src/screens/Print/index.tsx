import React, { FC } from "react";

import HTMLReactParser from "html-react-parser";

import { TState } from "src/hooks/api/usePrintBySlug/constants";

import {
  Image,
  Button,
  Heading,
  Flex,
  Spinner,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import PostCodeChecker from "postcodesio-client";

type Props = {
  printState: TState;
  push: (path: string) => Promise<boolean>;
};

const PrintScreen: FC<Props> = ({ printState }) => {
  const { print, isLoading } = printState;
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const PCCheck = new PostCodeChecker();
  const [input, setInput] = React.useState("");
  const [isError, setError] = React.useState(false);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput(e.target.value);

  React.useEffect(() => {
    (async () => {
      if (input) {
        if (await PCCheck.lookup(input)) {
          setError(false);
        } else {
          setError(true);
        }
      }
    })();
  }, [input]);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

  if (isLoading) {
    return (
      <Flex
        position="fixed"
        top={0}
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="purple" size="xl" thickness="2px" />
      </Flex>
    );
  }

  if (print) {
    return (
      <Flex
        gap={isDesktop ? 0 : 8}
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent={isDesktop ? "space-between" : "flex-start"}
        alignItems="center"
        height={window.innerHeight - 32}
      >
        <Flex
          flex={isDesktop ? "50%" : "inherit"}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            rounded="md"
            boxShadow={isDesktop ? "dark-lg" : "lg"}
            src={print.coverPhoto.url}
            objectFit="cover"
            maxHeight={768}
          />
        </Flex>
        <Flex
          flex={isDesktop ? "50%" : "inherit"}
          w="100%"
          flexDirection="column"
          alignItems="center"
          width="max-content"
        >
          <Heading>{print.title}</Heading>

          {HTMLReactParser(print.description.html)}

          {print.sellableEntities.map((e) => (
            <Button
              mt={4}
              colorScheme="purple"
              variant="outline"
              key={`${e.title}-${print.id}`}
              onClick={onModalOpen}
            >
              Purchase in {e.title} for £{e.triloPrice}
            </Button>
          ))}
        </Flex>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isModalOpen}
          onClose={onModalClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Where would you like this print to be delivered?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              We only deliver within the United Kingdom
              <FormControl isRequired mt={4}>
                <FormLabel>Full name</FormLabel>
                <Input ref={initialRef} placeholder="John Doe" />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Phone number</FormLabel>
                <Input placeholder="+44 XXXXXXXXX" />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Email address</FormLabel>
                <Input placeholder="somebody@email.com" />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>First line of address</FormLabel>
                <Input ref={initialRef} placeholder="First line of address" />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Second line of address</FormLabel>
                <Input placeholder="Second line of address" />
              </FormControl>
              <FormControl isInvalid={isError} isRequired mt={4}>
                <FormLabel>Post code</FormLabel>
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="What is your UK Postcode?"
                />
                <FormErrorMessage>
                  PostCode must be valid within the UK
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3} disabled>
                <Spinner />
              </Button>
              <Button onClick={onModalClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box position="fixed" bottom="1rem" right="1rem">
          <Button
            borderRadius="50%"
            h={16}
            w={16}
            colorScheme="purple"
            onClick={onOpen}
          >
            <ChevronLeftIcon color="purple.100" w={12} h={12} />
          </Button>
        </Box>
      </Flex>
    );
  }

  return <>Some sort of catch</>;
};

export default PrintScreen;
