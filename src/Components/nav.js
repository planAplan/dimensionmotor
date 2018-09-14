import React, {Component} from 'react';
import emitter from '../emitter';
import Lang from '../lib/Lang';
import {EventDict, getLang} from './constant';
const BANNER_ITEM = [
    {
        key: 0,
        title: Lang('home'),
        content: false
    },
    {
        key: 1,
        title: Lang('company'),
        content: {
            '公司简介': false,
            '企业文化': false,
            '加入维度': false,
        }
    },
    {
        key: 2,
        title: Lang('product'),
        class: 'float',
        content: {
            '有框架力矩电机': [
                'TFO080',
                'TFI112',
                'TFO140',
                'TFO170',
                'TFO220',
                'TFO224',
                'TFO260',
                'TFO263',
                'TFO325',
                'TFI420',
            ],
            '无框架力矩电机': [
                'TB1142',
                'TBI170',
                'TBI175',
                'TBI200',
            ],
            '无铁芯直线电机': [
                'LMU2',
                'LMU3',
                'LMU4',
                'LMU5',
                'LMU6',
                'LMU7',
                'LMU8',
            ],
            '有铁芯直线电机': [
                'LMF1',
                'LMF2',
                'LMF3',
                'LMF4',
            ],
            '直线电机模组': false,
            '对位平台': false,
            '音圈电机': false,
            '伺服驱动': false,
        }
    },
    {
        key: 3,
        title: Lang('apply'),
        content: {
            '直驱应用': false,
            '行业新闻': false,
        }
    },
    {
        key: 4,
        title: Lang('technology'),
        content: {
            '资料下载': false,
            '客户服务': false,
            '知识库': false,
        }
    },
    {
        key: 5,
        title: Lang('contact us'),
        content: false
    },
]

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
          navTop: false,
          collapse: false,
          searchPanel: false,
          lang: getLang() || 'zh'
        }
  
        this.offsetTop = 0;
    }
  
    componentDidMount () {
      if (this.navNode) {
        // this.offsetTop = this.navNode.offsetTop;
        this.offsetTop = 50;
        window.addEventListener('scroll',this.handleScroll);
      }
    }
  
    handleScroll = () => {
        let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    
        if (!this.state.navTop && sTop >= this.offsetTop) {
           this.setState({
             navTop: true
           })
        }
    
        if (sTop < this.offsetTop) {
           this.setState({
             navTop:false
           })
        }
      }
    itemClick = () => {
        // emitter.emit('wo', {a: '1', b: [1, 2, 3]})
    }
    itemFocus = (e) => {
        this.setState({
            collapse: BANNER_ITEM[e]
        })
    }
    itemBlur = () => {
        this.setState({
            collapse: false
        })
    }
    handleSearch = () => {
        this.setState({
            searchPanel: true
        })
    }
    handleSearchBlur = () => {
        this.setState({
            searchPanel: false
        })
    }
    changeLanguage = (lang) => {
        emitter.emit(EventDict.CHANGE_LANG, lang)
        this.setState({
            lang: lang === 'zh' ? 'en' : 'zh'
        })
    }
    render () {
        let {navTop, collapse, searchPanel} = this.state;
        let lang = this.state.lang
        return (
            <div ref={node => this.navNode = node} className={`nav${navTop ? ' fixed' : ''}`}>
                {
                    navTop ? <div className="logo"><span></span></div> : null
                }
                <ul className="navbar-nav">
                    {
                        BANNER_ITEM.map((item, id) => {
                            return (
                                <li key={id} className="nav-item" onMouseEnter={this.itemFocus.bind(this, id)} onMouseLeave={this.itemBlur} onClick={this.itemClick}>{item.title}</li>
                            )
                        })
                    }
                    <li onClick={this.changeLanguage.bind(this, lang)}><div className="language">{lang === 'zh' ? 'ZH' : 'EN'}</div></li>
                    <li>
                        <i class="icon-search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}></i>
                        {
                            searchPanel ?
                            <ul className="search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}>
                                <li>
                                    <input placeholder={lang === 'zh' ? '输入您的搜索词汇' : 'Enter your search term'} />
                                    <button type="submit">
                                        <i class="icon-search"></i>
                                    </button>
                                </li>
                            </ul>
                            : null
                        }
                    </li>
                </ul>
                {
                    collapse && collapse.content ? <Collapse content={collapse} onMouseEnter={this.itemFocus.bind(this, collapse.key)} onMouseLeave={this.itemBlur}/> : null
                }
            </div>
        )
    }
}

class Collapse extends Component {
        
    renderSub = (s) => {
        let c = []
        s.forEach((i) => {
            c.push(
                <a key={i} hred="javascript:;" data-name={i} onClick={this.subClick}>{i}</a>
            )
        })
        return (
            <div className="nav-box">
                {c}
            </div>
        )
    }
    subClick = (e) => {
        stopBubble(e);
        stopDefault(e)
        // console.log(e.target.dataset.name);
        emitter.emit('wo', {a: '1', b: [1, 2, 3], 'aa': 1})
    }
    renderContent = (content) => {
        let cnt = content.content
        let cls = content.class
        let c = []
        for (let i in cnt) {
            if (!cnt[i]) {
                c.push(
                    <li key={i} data-name={i}>
                        <a href="javascript:;" data-name={i}><span data-name={i}>&gt;</span> {i}</a>
                    </li>
                )
            } else {
                c.push(
                    <li key={i} data-name={i}>
                        <a href="javascript:;" data-name={i}><span data-name={i}>&gt;</span> {i}</a>
                        {this.renderSub(cnt[i])}
                    </li>
                )
            }
        }
        return (
            <div className="nav-div">
                <ul className={`nav-ul ${cls}`}  onClick={this.speciesClick.bind(this)}>
                    {c}
                </ul>
            </div>
        )
    }
    speciesClick = (e) => {
        stopBubble(e)
        // console.log(e.target.dataset.name);
        emitter.emit('wo', {a: '1', b: [1, 2, 3], 'li': 2})
    }
    render () {
        let {content} = this.props;
        return (
            <div className={`collapse collapse-${content.key}`} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                {/* {content.content} */}
                {this.renderContent(content)}
            </div>
        )
    }
}



// 1、禁止事件冒泡
function stopBubble(e) { 
//如果提供了事件对象，则这是一个非IE浏览器 
if ( e && e.stopPropagation ) 
    //因此它支持W3C的stopPropagation()方法 
    e.stopPropagation(); 
else
    //否则，我们需要使用IE的方式来取消事件冒泡 
    window.event.cancelBubble = true; 
}
    
// 2、禁止默认事件
//阻止浏览器的默认行为 
function stopDefault( e ) { 
    //阻止默认浏览器动作(W3C) 
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE中阻止函数器默认动作的方式 
    else
        window.event.returnValue = false; 
    return false; 
}