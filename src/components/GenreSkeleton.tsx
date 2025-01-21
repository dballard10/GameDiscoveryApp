import { List } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

const GenreSkeleton = () => {
  return (
    <List.Root listStyleType="none">
      <List.Item>
        <SkeletonText noOfLines={22} height="30px" width="175px"></SkeletonText>
      </List.Item>
    </List.Root>
  );
};

export default GenreSkeleton;
