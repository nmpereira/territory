import { useEffect, useState } from "react";
import Territory from "./components/Territory";
import {
  StyledGameArea,
  StyledTerritoryArea,
} from "./components/Territory.styled";
import { TerritoryProps } from "./types/Territory";
import Arrow from "./components/Arrow";

function App() {
  const [territoryScores, setTerritoryScores] = useState<TerritoryProps[]>([
    { score: 0, name: "A" },
    { score: 0, name: "B" },
    { score: 0, name: "C" },
    { score: 0, name: "D" },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [from, setFrom] = useState({ x: 0, y: 0 });
  const [to, setTo] = useState({ x: 0, y: 0 });

  // add a score every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTerritoryScores((prev) =>
        prev.map((territory) => ({
          ...territory,
          score: territory.score + 1,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyledGameArea>
        <StyledTerritoryArea>
          {territoryScores.map((territory, index) => (
            <Territory
              key={index}
              score={territory.score}
              name={territory.name}
              territoryScores={territoryScores}
              setTerritoryScores={setTerritoryScores}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
            />
          ))}
          <Arrow
            from={{ x: from.x, y: from.y }}
            to={{ x: to.x, y: to.y }}
            isDragging={isDragging}
          />
        </StyledTerritoryArea>
      </StyledGameArea>
    </>
  );
}

export default App;
