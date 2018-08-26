import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';

export default class Content extends Component {
    state = {
        focus: false
    }
    handleMouseEnter = (e) => {
        console.log(e.target)
    }
    render () {
        return (
            <div className="content-wrap">
                <div className="content"></div>
                <div className="children">
                    <div className="child-1"></div>
                    <div className="child-2"></div>
                    <div className="child-3"></div>
                </div>
            </div>
        )
    }
}