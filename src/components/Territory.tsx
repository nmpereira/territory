import { TerritoryProps } from "../types/Territory";
import { StyledTerritory } from "./Territory.styled";

const Territory = ({ score = 0, name }: TerritoryProps) => {
  return (
    <>
      <StyledTerritory>
        <h5>{name}</h5>
        <p>{score}</p>
      </StyledTerritory>
    </>
  );
};

export default Territory;
