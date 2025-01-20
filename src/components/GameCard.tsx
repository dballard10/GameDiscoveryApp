import { Game } from "@/components/hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Header fontSize="2xl">{game.name}</Card.Header>
      <CardBody></CardBody>
    </Card.Root>
  );
};

export default GameCard;
