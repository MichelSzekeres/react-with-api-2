import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let data = {
  head: '',
  header: [
    {
      type: 'header',
      attribute: {},
      content: 'header',
    },
  ],
  main: [
    {
      type: 'main',
      attribute: {},
      content: [
        {
          type: 'div',
          attribute: {},
          content: 'main element  ---- 1 ----',
        },
        {
          type: 'div',
          attribute: {},
          content: 'main element  ---- 2 ----',
        },
      ],
    },
  ],
  footer: [
    {
      type: 'footer',
      attribute: {},
      content: 'footer',
    },
  ],
};

ReactDOM.render(
  <App elements={data} />,
  document.getElementsByTagName('body')[0]
);
