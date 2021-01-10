'use strict';

const Paragraph = () => {
  return <p className="paragraph" id="first-paragraph">Lorem ipsum dolor sit amet</p>;
};

const appContainer = document.querySelector('#app');

ReactDOM.render(<Paragraph />, appContainer);
