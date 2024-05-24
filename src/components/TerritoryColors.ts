const generateTerritoryColors = (territoryName: string) => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#C0C0C0",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080",
    "#800000",
    "#008080",
    "#808000",
    "#FF6347",
    "#FFD700",
    "#FF1493",
    "#FF69B4",
    "#FF4500",
    "#FF8C00",
  ];

  return colors[territoryName.charCodeAt(0) % colors.length];
};

export default generateTerritoryColors;
