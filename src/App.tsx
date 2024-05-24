import { useEffect, useState } from "react";
import Territory from "./components/Territory";
import {
  StyledGameArea,
  StyledTerritoryArea,
} from "./components/Territory.styled";
import { TerritoryProps } from "./types/Territory";

function App() {
  const [territoryScores, setTerritoryScores] = useState<TerritoryProps[]>([
    { score: 0, name: "A" },
    { score: 0, name: "B" },
    { score: 0, name: "C" },
    { score: 0, name: "D" },
  ]);

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
            />
          ))}
          <Arrow />
        </StyledTerritoryArea>
      </StyledGameArea>
    </>
  );
}

const Arrow = (from: string, to: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.5a.5.5 0 0 1 .5.5v11.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 13.293V2a.5.5 0 0 1 .5-.5z"
      />
    </svg>
  );
};

export default App;
