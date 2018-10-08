import React, {Component} from 'react';
import Lang from '../../lib/Lang';
import { getLang } from '../constant';
import CONTENT from './content';
import emitter from '../../emitter';
import {EventDict} from '../constant';

require('./style/index.scss')

export default class Third extends Component {

    renderList = (list) => {
        let lis = []
        list && list.forEach((i, d) => {
            lis.push(
                <li key={d}>
                    <a href="javascript:;" className="img-mask" data-name={i.type} data-img={i.img} onClick={this.handleProduct.bind(this, event, i.type, i.detailImg)}><img src={i.img} alt=""/></a>
                    <dl>
                        <dt>{i.title[getLang()]}</dt>
                        <dd>{i.subscribe[getLang()]}</dd>
                    </dl>
                </li>
            )
        })
        return lis
    }
    handleProduct = (e, name, imgs) => {
        emitter.emit(EventDict.SPECIES_SUB_CLICK, {
            target: 'productImgSub',
            name: name,
            img: imgs
        })
    }
    render () {
        let {res} = this.props;
        let content = CONTENT[res.name];
        if (typeof content === 'object') {
            return (
                <div className="third">
                    <p>{Lang(res.name)}</p>
                    <div className="title">
                        <a href="javascript:;"><img src={content.img} alt=""/></a>
                        <div>
                            {content.subscribe[getLang()]}
                        </div>
                    </div>
                    <ul className="list">
                        {this.renderList(content.list, res.name)}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="empty-product">抱歉，暂未获取到<span>{Lang(res.name)}</span>配置文件</div>
            )
        }
    }
}