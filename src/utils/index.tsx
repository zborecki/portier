import { HighlightText } from '../components/styled.components';
import { RangeType } from '../types/common';

const filterWords = (words: (string | undefined)[]) => {
  const filteredWords = words.filter((word) => word !== undefined);

  return (
    filteredWords.length === 1 ? ` ${filteredWords} ` : filteredWords.join(' ')
  );
};

export const highlightText = (message: string, range: RangeType) => {
  const words = message.split(' ');

  const before = filterWords(words.map((word, index) => (
    (index < range.lower) ? word : undefined
  )));

  const highlighted = filterWords(words.map((word, index) => (
    ((index >= range.lower) && (index <= range.upper)) ? word : undefined
  )));

  const after = filterWords(words.map((word, index) => (
    (index > range.upper) ? word : undefined
  )));

  return (
    <>
      { before.startsWith(' ') ? before.slice(1) : before }
      <HighlightText className="highlighted">{ highlighted }</HighlightText>
      { after.endsWith(' ') ? after.slice(0, -1) : after }
    </>
  );
};
