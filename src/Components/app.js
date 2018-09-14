import React, {Component} from 'react';
import Banner from './banner';
import Content from './content';
import Footer from './footer';
import emitter from '../emitter';
import {EventDict, setLang} from './constant';
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        emitter.addListener('wo', this.handleEvent)
        emitter.addListener(EventDict.CHANGE_LANG, (lang) => {
            console.log(lang);
            setLang(lang)
            this.forceUpdate()
        })
    }
    handleEvent = (e) => {
        console.log(e);
    }
    componentWillUnmount () {
        emitter.removeListener('wo', this.handleEvent)
    } 
    render () {
        return (
            <div className="wrap">
                <Banner />
                <Content />
                <Footer />
            </div>
        )
    }
}