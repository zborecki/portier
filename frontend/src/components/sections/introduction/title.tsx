import type { FunctionComponent } from 'react';

import type { TextareaService } from '#types/services';

interface Props {
  children: TextareaService[];
}

const Title: FunctionComponent<Props> = ({ children }) => (
  <h1 className="introduction__title">
    {
      children[0].children.map(({ bold, text }) => (
        bold ? <b key={`Introduction-bold-${text}`}>{text}</b> : text
      ))
    }
  </h1>
);

export { Title };
