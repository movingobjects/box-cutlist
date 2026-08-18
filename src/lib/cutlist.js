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
    },
    {
      name: 'Back',
      width: outerLength,
      height: outerHeight,
    },
    {
      name: 'Left',
      width: innerWidth + thickness,
      height: outerHeight,
    },
    {
      name: 'Right',
      width: innerWidth + thickness,
      height: outerHeight,
    },
  ];
}

export function generateCutlist(params, generator = generateBoxBoards) {
  const boards = generator(params);

  return boards.map((board) => board);
}
