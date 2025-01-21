import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
