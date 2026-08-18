export function generateBoxBoards({
  length,
  width,
  height,
  thickness,
  gap,
}) {
  const innerLength = length + gap * 2;
  const innerWidth = width + gap * 2;
  const innerHeight = height + gap * 2;

  const outerLength = innerLength + thickness * 2;
  const outerWidth = innerWidth + thickness * 2;
  const outerHeight = innerHeight + thickness * 2;

  return [
    {
      name: 'Top',
      width: outerLength,
      height: outerWidth,
      rabbets: [
        {
          edge: 'top',
          width: thickness,
          depth: thickness / 4,
        },
        {
          edge: 'bottom',
          width: thickness,
          depth: thickness / 4,
        },
        {
          edge: 'left',
          width: thickness,
          depth: thickness / 4,
        },
        {
          edge: 'right',
          width: thickness,
          depth: thickness / 4,
        },
      ],
    },
    {
      name: 'Bottom',
      width: outerLength - thickness,
      height: outerWidth - thickness,
    },
    {
      name: 'Front',
      width: outerLength,
      height: outerHeight,
      rabbets: [
        {
          edge: 'bottom',
          width: thickness,
          depth: thickness / 2,
        },
        {
          edge: 'left',
          width: thickness,
          depth: thickness / 2,
        },
        {
          edge: 'right',
          width: thickness,
          depth: thickness / 2,
        },
      ]
    },
    {
      name: 'Back',
      width: outerLength,
      height: outerHeight,
      rabbets: [
        {
          edge: 'bottom',
          width: thickness,
          depth: thickness / 2,
        },
        {
          edge: 'left',
          width: thickness,
          depth: thickness / 2,
        },
        {
          edge: 'right',
          width: thickness,
          depth: thickness / 2,
        },
      ]

    },
    {
      name: 'Left',
      width: innerWidth + thickness,
      height: outerHeight,
      rabbets: [
        {
          edge: 'bottom',
          width: thickness,
          depth: thickness / 2,
        },
      ]
    },
    {
      name: 'Right',
      width: innerWidth + thickness,
      height: outerHeight,
      rabbets: [
        {
          edge: 'bottom',
          width: thickness,
          depth: thickness / 2,
        },
      ]
    },
  ];
}

// Given a rabbet ({ edge, width, depth }) figure out where it sits on
// the board, as an { x, y, width, height } rect for rendering. `width`
// is how far the rabbet reaches in from its edge; it always runs the
// full length of that edge. `depth` (how deep it's cut into the board's
// thickness) has no 2D representation, so it isn't part of the rect.
export function rabbetRect(rabbet, board) {
  const {
    edge, width,
  } = rabbet;

  switch (edge) {
    case 'top':
      return {
        x: 0,
        y: 0,
        width: board.width,
        height: width,
      };
    case 'bottom':
      return {
        x: 0,
        y: board.height - width,
        width: board.width,
        height: width,
      };
    case 'left':
      return {
        x: 0,
        y: 0,
        width,
        height: board.height,
      };
    case 'right':
      return {
        x: board.width - width,
        y: 0,
        width,
        height: board.height,
      };
    default:
      return {
        x: 0,
        y: 0,
        width: board.width,
        height: width,
      };
  }
}

export function generateCutlist(params, generator = generateBoxBoards) {
  const boards = generator(params);

  return boards.map((board) => board);
}
