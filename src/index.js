import React from 'react';
import ReactDom from 'react-dom';

import App from './Components/app';

require('./style/index.scss')

ReactDom.render(<App />, document.getElementById('app'))