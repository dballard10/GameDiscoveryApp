import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>
          Platforms
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
