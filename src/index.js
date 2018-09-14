import React, {Component} from 'react';
import ReactDom from 'react-dom';

import App from './components/app';
import {getLang, setLang} from './components/constant'


require('./asset/jquery-1.7.2.min.js');
require('./asset/jquery.flexslider-min.js');

require('./style/index.scss')

class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () {
    let lang = getLang();
    setLang(lang)
  }
  render() {
      return (
        <App />
      );
  }

}


ReactDom.render(<HomeView />, document.getElementById('app'))