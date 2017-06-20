import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

import { Provider } from 'react-redux';
import store from '../imports/store.js';



// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });


// Meteor.startup(() => {
//     render(
//         <Provider store={store}>
//             <App />
//         </Provider>,
//         document.getElementById('render-target')
//     );
// });