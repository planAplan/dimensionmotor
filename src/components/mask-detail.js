import React, {Component} from 'react';


export default class MaskDetail extends Component { 

    renderList = (list) => {
        let l = []
        list.length && list.forEach((i, d) => {
            l.push(
                <a key={d} href="javascript:;"><img src={i} alt=""/></a>
            )
        })
        return l
    }
    render () {
        let {res} = this.props;
        return (
            <div className="mask-detail">
                {this.renderList(res.img)}
            </div>
        )
    }
}