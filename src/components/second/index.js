import React, {Component} from 'react';
import CONTENT from './content';
import { getLang } from '../constant';
import Lang from '../../lib/Lang';
import emitter from '../../emitter';
import {EventDict} from '../constant';

require('./style/index.scss')

export default class Second extends Component {

    renderList = (list) => {
        let lis = []
        list && list.forEach((i, d) => {
            lis.push(
                <li key={d}>
                    <a href="javascript:;" className="img-mask" data-name={i.type} onClick={this.handleProduct}><img src={i.img} alt=""/></a>
                    <dl>
                        <dt>{i.title[getLang()]}</dt>
                        <dd>{i.subscribe[getLang()]}</dd>
                    </dl>
                </li>
            )
        })
        return lis
    }
    handleProduct = (e) => {
        emitter.emit(EventDict.SPECIES_CLICK, {
            target: 'productImg',
            name: e.target.dataset.name
        })
    }
    renderImgList = (list) => {
        let l = []
        list.forEach((i, d) => {
            l.push (
                <li>
                    <a href="javascript:;"><img src={i.img} alt=""/></a>
                    <div className="mask">{i.subscribe[getLang()]}</div>
                </li>
            )
        })
        return l
    }
    render () {
        let {res} = this.props
        if (typeof CONTENT[res.name] === 'object') {
            switch (res.name) {
                case 'company':
                    return (
                        <div className="second company">
                            <div className="banner">
                                <a href="javascript:;"><img src={CONTENT[res.name].img} alt=""/></a>
                            </div>
                            <div className="title">
                                {CONTENT[res.name].subscribe[getLang()]}
                            </div>
                            <ul className="list">
                                {this.renderList(CONTENT[res.name].list)}
                            </ul>
                        </div>
                    )
                case 'product':
                    return (
                        <div className="second">
                            <div className="banner">
                                <a href="javascript:;"><img src={CONTENT[res.name].img} alt=""/></a>
                            </div>
                            <ul className="list">
                                {this.renderList(CONTENT[res.name].list)}
                            </ul>
                        </div>
                    )
                case 'apply':
                    return (
                        <div className="apply">
                            <ul className="imgList">
                                {this.renderImgList(CONTENT[res.name].list)}
                            </ul>
                        </div>
                    )
                case 'contactUs':
                    return (
                        <div className="second contact">
                            <div className="banner">
                                <a href="javascript:;"><img src={CONTENT[res.name].img} alt=""/></a>
                            </div>
                            <div className="title">
                                {CONTENT[res.name].subscribe[getLang()]}
                            </div>
                            <ul className="list">
                                {this.renderList(CONTENT[res.name].list)}
                            </ul>
                        </div>
                    )
                case 'technology':
                    return (
                        <div className="second technology">
                            <div className="banner">
                                <a href="javascript:;"><img src={CONTENT[res.name].img} alt=""/></a>
                            </div>
                            <div className="title">
                                {CONTENT[res.name].subscribe[getLang()]}
                            </div>
                            <ul className="list">
                                {this.renderList(CONTENT[res.name].list)}
                            </ul>
                        </div>
                    )
                default:
                    break;
            }
        } else {
            return (
                <div className="empty-product">抱歉，暂未获取到<span>{Lang(res.name)}</span>配置文件</div>
            )
        }
    }
}