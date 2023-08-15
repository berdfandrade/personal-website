import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Badge,
  Stack,
  Button,
  useDisclosure,
  Divider,
  Center,
  Icon,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import RealBenny from "../../assets/imagem/RealBenny.jpg";
import PixelBenny from "../PaginaProjetos/ProjetosReactLive/BennyTree/assets/pixelBennySemFundo.png";
import { GiComputing } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { GiVikingHelmet } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { GiRosaShield } from "react-icons/gi";

function Bio() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p={5} alignItems="left">
      <Box>
        <Text fontSize="large" ml={1} fontWeight="bold">
          Bernardo Andrade
        </Text>
        <Text fontSize="sm" ml={1}>
          Developer Full Stack
        </Text>
        <Text fontSize="md" p={1} fontWeight="bold" mb={2}>
          My name is Bernardo. I have a degree in Social Communication and
          studied Literature. <br />
          I am passionate about programming <br /> and also the arts. I try to
          combine these two worlds whenever I can. I am a Full Stack developer
          who enjoys committing to continuous learning.
        </Text>
        <Stack direction="row">
          <Badge colorScheme="green" p={1} borderRadius={6}>
            BackEnd
          </Badge>
          <Badge colorScheme="red" p={1} borderRadius={6}>
            FrontEnd
          </Badge>
          <Badge colorScheme="purple" p={1} borderRadius={6}>
            Design
          </Badge>
        </Stack>
        <Button mt={8} colorScheme="facebook" size="sm" onClick={onOpen}>
          More
        </Button>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sobre Mim</DrawerHeader>
          <Center>
            <Avatar
              src={RealBenny}
              mb={6}
              style={{ width: "200px", height: "200px" }}
            />
          </Center>

          <DrawerBody fontSize={"md"}>
            My name is Bernardo. I have a degree in Social Communication and
            studied Literature. I am passionate about programming and the arts,
            and I always try to combine these two worlds whenever possible. As a
            Full Stack developer, I enjoy dedicating myself to continuous
            learning.
            <br />
            <br />
            I am a person who is highly interested in listening, learning, and
            finding solutions for both simple and complex problems. Deep down, I
            believe my two greatest passions are creating things and refining
            them. This process may seem eternal and infinite at times, but for
            me, it is immensely gratifying.
            <br />
            <br />
            <Divider mb={2} />
            <Center mb={2}>
              <Avatar
                src={PixelBenny}
                // size="xl"
                style={{ width: "150px", height: "150px" }}
              />

              <Text p={2} fontSize="md" mt={4} mr={7}>
                <Text as="b">Info: </Text> <br />
                <Divider maxW={"100px"} mb={2} />
                <Icon as={GiVikingHelmet} /> Class |{" "}
                <Icon as={GiComputing} />
                <br />
                <Icon as={FaRulerVertical} /> Height | <Text as="b">1,73m or 5'8"</Text>
                <br />
                <Icon as={GiWeightScale} /> Weight | <Text as="b">76kg</Text>
                <br />
                <Icon as={GiBroadsword} /> ATK | <Text as="b">4500</Text>
                <br />
                <Icon as={GiRosaShield} /> DEF | <Text as="b">2500</Text>
                <br />
                <Icon as={FaBirthdayCake} /> <Text as="b">15-01-1996</Text>
                <br />
              </Text>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Bio;
