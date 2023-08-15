import { Input, Box, Center } from "@chakra-ui/react";

const BarraDeBusca = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <Box mt={1}>
      <Center>
        <Input
          width={"60%"}
          borderRadius={"full"}
          bg={"whiteAlpha"}
          placeholder="Search Pokémon"
          errorBorderColor="Put a Pokémon!"
          onChange={handleSearch}
          vairant={"outline"}
        />
      </Center>
    </Box>
  );
};

export default BarraDeBusca;
