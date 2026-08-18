import BoardDiagram from './BoardDiagram.jsx';
import './CutlistTable.scss';

function formatDimension(value) {
  return Number.isFinite(value) ? value.toString() : '—';
}

function CutlistTable({
  boards, unit,
}) {
  if (!boards.length) {
    return <p className="cutlist-table__empty">Enter object dimensions to generate a cutlist.</p>;
  }

  const maxDimension = Math.max(...boards.flatMap((board) => [board.width, board.height]));

  return (
    <table className="cutlist-table">
      <thead>
        <tr>
          <th>Board</th>
          <th>Diagram</th>
          <th>Dimensions</th>
          <th>Rabbets</th>
        </tr>
      </thead>
      <tbody>
        {boards.map((board) => (
          <tr key={board.name}>
            <td>{board.name}</td>
            <td>
              <BoardDiagram
                height={board.height}
                maxDimension={maxDimension}
                rabbets={board.rabbets}
                width={board.width} />
            </td>
            <td>
              {formatDimension(board.width)}
              {' × '}
              {formatDimension(board.height)}
              {' '}
              {unit}
            </td>
            <td>
              {board.rabbets?.length ? (
                <ul className="cutlist-table__rabbets">
                  {board.rabbets.map((rabbet) => (
                    <li key={`${rabbet.edge}-${rabbet.width}-${rabbet.depth}`}>
                      {rabbet.edge}
                      {': '}
                      {formatDimension(rabbet.width)}
                      {unit}
                      {' w, '}
                      {formatDimension(rabbet.depth)}
                      {unit}
                      {' d'}
                    </li>
                  ))}
                </ul>
              ) : '—'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CutlistTable;
