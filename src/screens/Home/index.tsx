import React, { FC } from "react";

import {
  Button,
  Heading,
  Box,
  Image,
  Container,
  Flex,
  Spinner,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { TState } from "src/hooks/api/usePrints/constants";
import { PathNames } from "src/constants/constants";

type Props = {
  printsState: TState;
  push: (path: string) => Promise<boolean>;
};

const HomeScreen: FC<Props> = ({ push, printsState }) => {
  const { prints, isLoading } = printsState;
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  if (prints.length) {
    return (
      <Flex flexWrap="wrap" gap={4} w="75%" margin="auto">
        {prints.map(({ id, title, slug, coverPhoto, sellableEntities }) => (
          <Container
            key={id}
            p={8}
            backgroundColor="purple.900"
            borderRadius={32}
            boxShadow="xl"
            rounded="2xl"
            bg="whiteAlpha.100"
            maxWidth="400px"
          >
            <Flex alignItems="center" justifyContent="center" width="100%">
              <Image
                width="100%"
                objectFit="cover"
                src={coverPhoto.url}
                alt=""
                rounded="md"
              />
            </Flex>
            <Heading mt={4} color="purple.300">
              {title}
            </Heading>
            <p>
              Available in:
              {sellableEntities.map((e, i) =>
                i === 0
                  ? ` ${e.title}`
                  : i === sellableEntities.length - 1
                  ? ` & ${e.title}.`
                  : `, ${e.title}`
              )}
            </p>
            <Flex alignItems="center" justifyContent="center" width="100%">
              <Button
                mt={4}
                colorScheme="purple"
                onClick={() => {
                  push(`${PathNames.PRINT}/${slug}`);
                }}
              >
                View
              </Button>
            </Flex>
          </Container>
        ))}
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

  return <>Some catch all</>;
};

export default HomeScreen;
