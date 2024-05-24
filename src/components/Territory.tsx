import { TerritoryProps } from "../types/Territory";
import { StyledDraggableSprite, StyledTerritory } from "./Territory.styled";
import generateTerritoryColors from "./TerritoryColors";
// import { motion } from "framer-motion";

interface TerritoryComponentProps extends TerritoryProps {
  territoryScores: TerritoryProps[];
  setTerritoryScores: (territoryScores: TerritoryProps[]) => void;
}

const Territory = ({
  score = 0,
  name,

  territoryScores,
  setTerritoryScores,
}: TerritoryComponentProps) => {
  const hangdleOnDrop = (e: React.DragEvent) => {
    const spriteName = e.dataTransfer.getData("text/plain") as string;
    console.log({ spriteName, target: name });

    const newTerritoryScores = territoryScores.map((territory) => {
      const targetTerritory = territoryScores.find((t) => t.name === name);
      const sourceTerritory = territoryScores.find(
        (t) => t.name === spriteName
      );

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
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, name: string) => {
    e.dataTransfer.setData("text/plain", name);
  };

  //   const handleDragEnd = (e: React.DragEvent) => {
  //     console.log("drag end");
  //   };

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
          //   onDragEnd={handleDragEnd}
        />

        <p>{score}</p>
      </StyledTerritory>
    </>
  );
};

export default Territory;
