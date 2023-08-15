import React from "react";
import {
  Box,
  Icon,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Grid,
  GridItem,
  Link,
  Flex,
} from "@chakra-ui/react";

import * as SI from "react-icons/si";
import { TbHexagonLetterF } from "react-icons/tb";

import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const MaisSobreMim = () => {
  return (
    <Tabs variant="solid-rounded" colorScheme="facebook">
      <TabList>
        <Tab fontWeight={"light"} fontSize={"sm"}>
          Contact
        </Tab>
        <Tab fontWeight={"light"} fontSize={"sm"}>
          More info...
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid templateColumns="repeat(1, 1fr)" gap={4}>
            <GridItem>
              <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                <AiOutlineMail size={20} />
                <Text fontWeight="bold">E-mail</Text>
                <Link href="mailto:berdfandrade@gmail.com">
                  berdfandrade@gmail.com
                </Link>
              </Box>
            </GridItem>
            <GridItem>
              <Link
                href="https://wa.link/mcu7y1"
                _hover={{ cursor: "pointer" }}
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiOutlineWhatsApp size={20} />
                  <Text fontWeight="bold">Phone</Text>
                  <Text>+55 (31) 99420-9220</Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                _hover={{ cursor: "pointer" }}
                href="https://www.linkedin.com/in/bernardo-fonseca-4240a8131/"
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiFillLinkedin size={20} />
                  <Text fontWeight="bold">Linkedin</Text>

                  <Text fontWeight="light">Bernardo Fonseca</Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                _hover={{ cursor: "pointer" }}
                href="https://www.instagram.com/bernadofandrade/"
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiFillInstagram size={20} />
                  <Text fontWeight="bold">Instagram</Text>
                  <Text fontWeight="light">@bernadofandrade</Text>
                </Box>
              </Link>
            </GridItem>
          </Grid>
        </TabPanel>

        {/* Filosofia */}

        <TabPanel>
          <Heading>Philosophy</Heading>

          <Text mt={2} textAlign="justify">
            I am a practitioner of Sahaja Yoga, which is a spiritual and
            ritualistic practice that seeks peace and satisfaction through
            meditation. That's why I used drawings of little Bernardo
            meditating. Besides, I continue to explore and improve my
            perspective on life through art and introspection.
            <br />
            I really enjoy reading and listening to music. I have been playing
            drums for over 13 years, and it has helped me greatly with
            discipline. Additionally, I love running and engaging in physical
            activities as they support my goal of achieving concentration
            through Yoga.
            <br />
            Comedy is something I'm a huge fan of, and I love comedy movies and
            stand-up specials. To me, a good comedy is as enjoyable as a good
            album. I also love discovering new music and interesting facts about
            quantum physics...
          </Text>
          <Heading mt={4} mb={3}>
            {" "}
            About this website
          </Heading>
          <Text textJustify={"center"} mb={5}>
            This website was developed using various different technologies. It
            was built from scratch using React, with styling from Chakra-ui,
            icons from React-icons, and some Flat icons for the page heroes.
            <br />
            Throughout the programming process, I learned a lot, and it was very
            enlightening. I consumed APIs and had to put in the effort to
            organize the code efficiently to work on the project independently.
            💪💡
          </Text>
          <Flex gap={6} flexDirection={"row"}>
            <Icon boxSize={10} as={SI.SiChakraui} />
            <Icon boxSize={10} as={SI.SiReact} />
            <Icon boxSize={10} as={TbHexagonLetterF} />
            <Icon boxSize={10} as={SI.SiNodedotjs} />
          </Flex>
          <TabPanel></TabPanel>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MaisSobreMim;
