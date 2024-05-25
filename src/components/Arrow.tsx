const Arrow = ({
  from,
  to,
  isDragging,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isDragging: boolean;
}) => {
  return (
    isDragging && (
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
          </marker>
        </defs>
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          style={{
            stroke: "#f00",
            strokeWidth: 3,
            markerEnd: "url(#arrow)",
          }}
        />
      </svg>
    )
  );
};

export default Arrow;
