'use strict';

const Paragraph = () => {
  return React.createElement(
    'p',
    {
      id: 'first-paragraph',
      className: 'paragraph',
    },
    'Lorem ipsum dolor sit amet',
  );
};

const appContainer = document.querySelector('#app');

ReactDOM.render(React.createElement(Paragraph), appContainer);
