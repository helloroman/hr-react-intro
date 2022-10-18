'use strict';
const Paragraph = () => {
return React.createElement(
    'p',
    {
        style:{
            backgroundColor: 'blue',
            fontSize: 'bold',
        }
    },
    'Lorem ipsum',
);


};
const appContainer = document.querySelector('#app');
ReactDOM.render(Paragraph(), appContainer);