import { useState } from "react";
import Territory from "./components/Territory";
import { StyledTerritoryArea } from "./components/Territory.styled";
import { TerritoryProps } from "./types/Territory";

function App() {
  const [territoryScores, setTerritoryScores] = useState<TerritoryProps[]>([
    { score: 0, name: "A" },
    { score: 0, name: "B" },
    { score: 0, name: "C" },
    { score: 0, name: "D" },
  ]);
  return (
    <>
      <StyledTerritoryArea>
        {territoryScores.map((territory, index) => (
          <Territory
            key={index}
            score={territory.score}
            name={territory.name}
          />
        ))}
      </StyledTerritoryArea>
    </>
  );
}

export default App;
