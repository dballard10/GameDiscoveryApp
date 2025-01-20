import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body height="100px">
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
