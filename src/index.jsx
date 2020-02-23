import React from 'react';
import ReactDOM from 'react-dom';

// These must be the first lines in src/index.js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/sass/default.scss";

// Moment
import 'moment/locale/en-gb';
// import 'moment/locale/zh-cn';
import 'moment/locale/zh-hk';

import App from "App";

ReactDOM.render(<App />, document.getElementById('root'));
