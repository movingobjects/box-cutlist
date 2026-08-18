import './BoardDiagram.scss';

const MAX_SIZE = 300;
const PADDING = 6;

function BoardDiagram({
  width, height, maxDimension,
}) {
  const longest = maxDimension || Math.max(width, height) || 1;
  const scale = MAX_SIZE / longest;

  const rectWidth = width * scale;
  const rectHeight = height * scale;

  const viewWidth = rectWidth + PADDING * 2;
  const viewHeight = rectHeight + PADDING * 2;

  return (
    <svg
      className="board-diagram"
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      width={viewWidth}>
      <rect
        className="board-diagram__rect"
        height={rectHeight}
        width={rectWidth}
        x={PADDING}
        y={PADDING} />
    </svg>
  );
}

export default BoardDiagram;
