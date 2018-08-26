import React, {Component} from 'react';
import ReactDom from 'react-dom';

import App from './components/app';
import Translate from './components/translate';

require('./style/index.scss')

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Translate Template={<App />}/>
      );
  }

}


ReactDom.render(<HomeView />, document.getElementById('app'))