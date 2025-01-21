import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  if (!score) return null;

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
