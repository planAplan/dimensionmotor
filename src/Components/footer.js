import React, {Component} from 'react';

import {BANNER_ITEM} from './constant';
import Lang from '../lib/Lang';
import emitter from '../emitter';
import {EventDict} from './constant';
import {transStrToHump} from '../lib/wheel';

export default class Footer extends Component {
    itemClick = (e) => {
        emitter.emit(EventDict.NAV_ITEM_CLICK, {
            target: 'footer-nav',
            name: transStrToHump(e.target.dataset.name)
        })
    }
    handleProduct = (e) => {
        emitter.emit(EventDict.SPECIES_CLICK, {
            target: 'footer-product',
            name: e.target.dataset.name
        })
    }
    renderContent = () => {
        let getSubCnt = (content) => {
            if (content) {
                let l = []
                for (let i in content) {
                    l.push(
                        <dd data-name={i} onClick={this.handleProduct} key={i}><a data-name={i} href="javascript:;">{Lang(i)}</a></dd>
                    )
                }
                return l
            } else {
                return <dd />
            }
        }

        let getContent = (list) => {
            let l = []
            list.forEach((i, d) => {
                let cls = ''
                if (i.title === 'product') cls = 'flex'
                if (i.title !== 'home') {
                    l.push (
                        <dl className={cls} key={d}>
                            <dt data-name={i.title} onClick={this.itemClick}>{Lang(i.title)}</dt>
                            {i.title !== 'contactUs' ? getSubCnt(i.content) : i.footer}
                        </dl>
                    )
                }

            })
            return l
        }
        return (
            <div className="footer_menu">
                {getContent(BANNER_ITEM)}
            </div>
        )
    }
    componentWillMount () {
        this.setState({
            content: this.renderContent()
        })
    }
    render () {
        return (
            <div class="footer">
                <div className="footer_content">
                    {this.state.content || ''}
                </div>
            </div>
        )
    }
}