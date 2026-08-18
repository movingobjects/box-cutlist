import { rabbetRect } from '../lib/cutlist.js';
import './BoardDiagram.scss';

const MAX_SIZE = 300;
const PADDING = 6;

function BoardDiagram({
  width, height, maxDimension, rabbets = [],
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
      <g className="board-diagram__rabbets">
        {rabbets.map((rabbet) => {
          const rect = rabbetRect(rabbet, {
            width,
            height,
          });

          return (
            <rect
              key={`${rabbet.edge}-${rabbet.width}-${rabbet.depth}`}
              className="board-diagram__rabbet"
              height={rect.height * scale}
              width={rect.width * scale}
              x={PADDING + rect.x * scale}
              y={PADDING + rect.y * scale} />
          );
        })}
      </g>
    </svg>
  );
}

export default BoardDiagram;
