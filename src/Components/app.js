import React, {Component} from 'react';
import Banner from './banner';
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
                <Content />
                <Footer />
            </div>
        )
    }
}