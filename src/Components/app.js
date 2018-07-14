import React, {Component} from 'react';
import Temp from './temp';

require('./style/app.scss')

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <Temp />
    }
}