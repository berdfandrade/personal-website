import React from "react";
import {
  Center,
  ChakraProvider,
  Flex,
  Grid,
  Text,
  Code,
} from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Projetos from "../../assets/imagem/projetos.png";

import Cabecalho from "../Cabecalho/Cabecalho";

import Gerador from "./ProjetosReactLive/GeradorDeSenha/Gerador";
import Pomodoro from "./ProjetosReactLive/Pomodoro/Pomodoro";
import BennyDex from "./ProjetosReactLive/BennyDex/BennyDex";
import Calculadora from "./ProjetosReactLive/Calculadora/Calculadora";
import HeroCard from "./ProjetosReactLive/HeroCard/componentes/characterCard";
import BennyTree from "./ProjetosReactLive/BennyTree/componentes/ExportAsApp";
import ApiHandle from "./Outros/ApiHandle";
import ProjetoCard from "./ProjetoCard";

import { RiLockPasswordFill } from "react-icons/ri";
import { GiTomato } from "react-icons/gi";
import { MdCatchingPokemon } from "react-icons/md";
import { BsCalculator } from "react-icons/bs";
import { GiAncientSword } from "react-icons/gi";
import { SiTheconversation } from "react-icons/si";
import * as GI from "react-icons/gi";

function PaginaSobre() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Projects"}
        imagem={Projetos}
        descricao={
          <Text fontSize={"15"}>
            Here are some projects that I have developed.
          </Text>
        }
      />
      <DividerCustomizado />
      <Flex justify="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          width={"800px"}
          maxW={"90%"}
          gap={4}
          p={1}
        >
          <ProjetoCard
            tag1={"Front-end"}
            nome={"Pomodoro Timer"}
            corIcon={"red.400"}
            componenteLive={<Pomodoro />}
            descricaoCard={"A simple Pomodoro timer for studying/working."}
            descricao={
              "A simple Pomodoro timer for studying/working, created with React and Chakra-ui, which I also used to style this website. This app is live! You can try it right here!"
            }
            icon={GiTomato}
            link={"https://github.com/berdfandrade/pomodoro-timer/"}
          />
          <ProjetoCard
            tag1={"Front-end"}
            nome={"Password Generator"}
            componenteLive={<Gerador />}
            icon={RiLockPasswordFill}
            corIcon={"orange.300"}
            descricaoCard={"A simple password generator with a choosable length."}
            link={"https://github.com/berdfandrade/gerador-de-senha"}
            descricao={
              "A simple password generator developed in React with styling from Chakra-ui. This app is live! You can try it right here."
            }
          />
          <ProjetoCard
            nome={"BennyDex"}
            tag1={"Front-end"}
            icon={MdCatchingPokemon}
            link={"https://github.com/berdfandrade/bennydex/tree/main"}
            componenteLive={<BennyDex />}
            descricaoCard={"An application that consumes the PokéAPI."}
            descricao={
              <Text>
                An imitation of the classic Pokédex, created by consuming an API
                specialized in providing information about Pokémon. <br />I
                fetched the information and rendered it with React, and I styled
                it using Chakra-ui.
              </Text>
            }
          />

          <ProjetoCard
            tag1={"Front-end"}
            nome={"Calculator"}
            icon={BsCalculator}
            componenteLive={<Calculadora />}
            descricaoCard={"A simple calculator built with React with darkmode."}
            link={"https://github.com/berdfandrade/calculadora"}
            descricao={
              <Text justify={"center"}>
                A calculator built with React and Chakra-ui. The calculator has
                a dark mode! This app is live! You can try it right here!
              </Text>
            }
          />

          <ProjetoCard
            tag2={"Back-end"}
            nome={"RPG API"}
            icon={GiAncientSword}
            iconModal={GiAncientSword}
            idioma={"PT-BR"}
            componenteLive={
              <ApiHandle dominio={"rpgapi-one.vercel.app/"} url={"heroi"} />
            }
            descricaoCard={
              "API built with Flask that returns a hero or a monster!"
            }
            descricao={
              <Text justify={"center"}>
                This Python API, using the Flask framework, is responsible for
                generating <Text as="b">RPG heroes</Text> with randomly
                generated levels, stats, and names. The heroes can have male,
                female, or neutral gender, and each one has a customized
                inventory corresponding to their current level. Furthermore, the
                API is also capable of generating <Text as="b">monsters</Text>{" "}
                on the route <Code as="b">/monstro</Code> with random levels,
                just like the heroes, ranging from 1 to 99. The monsters have
                randomly generated names, temperament, strength, and defense
                stats.
              </Text>
            }
          />
          <ProjetoCard
            tag2={"Back-end"}
            nome={"Advice API"}
            icon={SiTheconversation}
            idioma={"PT-BR"}
            iconModal={SiTheconversation}
            componenteLive={<ApiHandle dominio={"apiconselho.vercel.app/"} />}
            descricaoCard={"An API that returns a random piece of advice."}
            link={"https://github.com/berdfandrade/api-conselho/"}
            descricao={
              <Text justify={"center"}>
                The "Random Advice API" is an application developed in Node.js
                and Express that provides inspiring and motivational advice
                randomly. Through this simple API, users can get diverse advice
                whenever they want, which can serve as a source of encouragement
                or motivation in various life situations.
              </Text>
            }
          />
          <ProjetoCard
            tag1={"Front-End"}
            tag2={"Back-end"}
            nome={"Hero Card"}
            icon={GI.GiSwordman}
            iconModal={GI.GiSwordman}
            idioma={"PT-BR"}
            componenteLive={
              <Center>
                <HeroCard />
              </Center>
            }
            link={"https://github.com/berdfandrade/hero-card"}
            descricaoCard={"A card that renders the RPG API!"}
            descricao={
              <Text justify={"center"}>
                The HeroCard component is a part of the front-end of an
                application that consumes an API to display information about a
                randomly generated hero. The component displays the attributes
                and details of the hero in a card format.
                <br />
              </Text>
            }
          />
          <ProjetoCard
            tag1={"Front-End"}
            nome={"Bernardo Card"}
            icon={GI.GiInfo}
            componenteLive={
              <Center>
                <BennyTree />
              </Center>
            }
            idioma={"PT-BR"}
            link={"https://github.com/berdfandrade/link_tree"}
            descricaoCard={"An RPG card displaying my information."}
            descricao={
              <Text justify={"center"}>
                It's a React card that showcases information about me as an RPG
                character. I've tried to include some specific details, as if it
                were a character. I use this card in my Instagram BIO and I'm
                planning to add features to make it work as an OpenSource
                LinkTree alternative too!
                <br />
              </Text>
            }
          />
          <ProjetoCard
            tag2={"Back-End"}
            nome={"Monster API"}
            icon={GI.GiMonsterGrasp}
            iconModal={GI.GiMonsterGrasp}
            idioma={"PT-BR"}
            componenteLive={
              <Center>
                <ApiHandle dominio={"apimonster.vercel.app/"} url={"monstro"} />
              </Center>
            }
            link={"https://github.com/berdfandrade/api_monster"}
            descricaoCard={
              "API built in Node.js that returns a random monster."
            }
            descricao={
              <Text justify={"center"}>
                An API built in Node.js similar to the RPG API. This API is
                capable of generating monsters with random levels, just like the
                heroes, ranging from 1 to 99. The monsters have randomly
                generated names, temperament, and strength and defense stats.
                Additionally, the monsters possess an inventory of items that
                they carry.
                <br />
              </Text>
            }
          />
        </Grid>
      </Flex>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaSobre;
