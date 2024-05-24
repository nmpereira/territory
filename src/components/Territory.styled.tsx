import styled from "styled-components";

export const StyledTerritory = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTerritoryArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
`;

export const StyledGameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const StyledDraggableSprite = styled.div<{ color: string }>`
  cursor: grab;
  user-select: none;
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.color};

  border-radius: 50%;
`;
