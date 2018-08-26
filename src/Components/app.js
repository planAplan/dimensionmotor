import React, {Component} from 'react';
// import Temp from './temp';
import Banner from './banner';
import Navbar from './nav';
import Content from './content';
import Footer from './footer';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="wrap">
                <Banner />
                <Navbar />
                <Content />
                <Footer />
            </div>
        )
    }
}