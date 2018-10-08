import React, {Component} from 'react';
import Banner from './banner';
import Content from './content';
import Footer from './footer';
import emitter from '../emitter';
import {EventDict} from './constant';
import Second from './second';
import Third from './third';
import MaskDetail from './mask-detail';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: <Content />
        }
    }
    componentDidMount () {
        emitter.addListener('wo', this.handleEvent)
        emitter.addListener(EventDict.NAV_ITEM_CLICK, this.handleNavItemClick)
        emitter.addListener(EventDict.SPECIES_CLICK, this.handleSpeciesClick)
        emitter.addListener(EventDict.SPECIES_SUB_CLICK, this.handleSpeciesSubClick)
    }
    handleEvent = (e) => {
    }
    handleNavItemClick = (e) => {
        if (e.name === 'home') {
            this.setState({
                content: <Content />
            })
        } else {
            this.setState({
                content: <Second res={e}/>
            })
        }
    }
    handleSpeciesClick = (e) => {
        this.setState({
            content: <Third res={e}/>
        })
    }
    handleSpeciesSubClick = (e) => {
        this.setState({
            content: <MaskDetail res={e}/>
        })
    }
    componentWillUnmount () {
        emitter.removeAllListeners()
    } 
    render () {
        let {content} = this.state;
        return (
            <div className="box">
                <div className="wrap">
                    <Banner />
                    {content}
                </div>
                <Footer />
            </div>
        )
    }
}