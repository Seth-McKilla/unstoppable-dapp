import { Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      justifyContent="flex-end"
      padding={2}
      backgroundColor="gray.200"
    >
      <Button colorScheme="purple">Placeholder</Button>
    </Flex>
  );
};

export default Navbar;
