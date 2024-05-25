import { TerritoryProps } from "../types/Territory";
import { StyledDraggableSprite, StyledTerritory } from "./Territory.styled";
import generateTerritoryColors from "./TerritoryColors";
// import { motion } from "framer-motion";

interface TerritoryComponentProps extends TerritoryProps {
  territoryScores: TerritoryProps[];
  setTerritoryScores: (territoryScores: TerritoryProps[]) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  from: { x: number; y: number };
  setFrom: (from: { x: number; y: number }) => void;
  to: { x: number; y: number };
  setTo: (to: { x: number; y: number }) => void;
}

const Territory = ({
  score = 0,
  name,

  territoryScores,
  setTerritoryScores,

  setIsDragging,

  setFrom,

  setTo,
}: TerritoryComponentProps) => {
  const hangdleOnDrop = (e: React.DragEvent) => {
    const spriteName = e.dataTransfer.getData("text/plain") as string;
    console.log({ spriteName, target: name });

    const newTerritoryScores = territoryScores.map((territory) => {
      // const targetTerritory = territoryScores.find((t) => t.name === name);
      // const sourceTerritory = territoryScores.find(
      //   (t) => t.name === spriteName
      // );

      // transfer half of the score to the target territory
      if (territory.name === name) {
        return {
          ...territory,
          score:
            territory.score -
            Math.floor(
              territoryScores.find((t) => t.name === spriteName)!.score / 2
            ),
        };
      }

      if (territory.name === spriteName) {
        return {
          ...territory,
          score: Math.floor(territory.score / 2),
        };
      }

      return territory;
    });

    if (newTerritoryScores.find((t) => t.name === name)!.score <= 0) {
      // change sprite name to the target territory
      newTerritoryScores.find((t) => t.name === spriteName)!.name = name;
    }

    setTerritoryScores(newTerritoryScores);

    // setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, name: string) => {
    e.dataTransfer.setData("text/plain", name);

    // setFrom({ x: e.clientX, y: e.clientY });

    // set x and y to the center of the sprite
    // setFrom({ x: e.clientX, y: e.clientY });

    const center = calculateCenter(e);
    setFrom(center);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const ondragHandler = (e: React.DragEvent) => {
    setIsDragging(true);

    // console.log("dragging", e.clientX, e.clientY);
    // const center = calculateCenter(e);
    // setTo(center);

    setTo({ x: e.clientX, y: e.clientY });

    // set x and y to the center of the sprite
  };

  const calculateCenter = (e: React.DragEvent) => {
    const sprite = e.target as HTMLDivElement;
    const rect = sprite.getBoundingClientRect();

    const x = rect.x + rect.width / 2;
    const y = rect.y + rect.height / 2;

    console.log({ x, y });
    return {
      x,
      y,
    };
  };

  return (
    <>
      <StyledTerritory>
        <h5>{name}</h5>

        <StyledDraggableSprite
          color={generateTerritoryColors(name)}
          draggable
          onDragStart={(e) => handleDragStart(e, name)}
          onDrop={hangdleOnDrop}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDrag={ondragHandler}
        />

        <p>{score}</p>
      </StyledTerritory>
    </>
  );
};

export default Territory;
