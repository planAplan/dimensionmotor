import React, {Component} from 'react';
import ReactDom from 'react-dom';

import App from './components/app';
import {EventDict, getLang, setLang} from './components/constant'
import emitter from './emitter';



require('./asset/jquery-1.7.2.min.js');
require('./asset/jquery.flexslider-min.js');

require('./style/index.scss')

class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () {
    let lang = getLang() || 'zh';
    setLang(lang)
  }
  componentDidMount () {
    emitter.addListener(EventDict.CHANGE_LANG, (lang) => {
        setLang(lang)
        window.location.href = window.location.href
    })
  }
  handleEvent = (e) => {
  }
  componentWillUnmount () {
    emitter.removeAllListeners()
  } 
  render() {
      return (
        <App />
      );
  }

}


ReactDom.render(<HomeView />, document.getElementById('app'))