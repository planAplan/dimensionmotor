import React, {Component} from 'react';
import Banner from './banner';
import Content from './content';
import Footer from './footer';
import emitter from '../emitter';


export default class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        emitter.addListener('wo', this.handleEvent)
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