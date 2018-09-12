import React, {Component} from 'react';
// import { FormattedMessage as FM} from 'react-intl';
import Navbar from './nav';



export default class Banner extends Component {
    render () {
        
        return (
            <div className="header">
                <div className="logo">
                    <a>
                        <img src={require('../images/logo.png')}/>
                    </a>
                </div>
                <Navbar />
            </div>
        );
    }
}