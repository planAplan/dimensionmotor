import React, {Component} from 'react';
import emitter from '../emitter';
import Lang from '../lib/Lang';
import {EventDict, getLang, BANNER_ITEM} from './constant';
import {transStrToHump, stopBubble, stopDefault} from '../lib/wheel';
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
    itemClick = (e) => {
        emitter.emit(EventDict.NAV_ITEM_CLICK, {
            target: 'nav',
            name: transStrToHump(e.target.dataset.name)
        })
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
    changeLanguage = () => {
        let {lang} = this.state
        lang = lang === 'zh' ? 'en' : 'zh'
        emitter.emit(EventDict.CHANGE_LANG, lang)
        this.setState({
            lang: lang
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
                                <li key={id} className="nav-item" data-name={item.title} onMouseEnter={this.itemFocus.bind(this, id)} onMouseLeave={this.itemBlur} onClick={this.itemClick}>{Lang(item.title)}</li>
                            )
                        })
                    }
                    <li onClick={this.changeLanguage}><div className="language">{lang === 'zh' ? 'EN' : '中文'}</div></li>
                    <li>
                        <i class="icon-search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}></i>
                        {
                            searchPanel ?
                            <ul className="search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}>
                                <li>
                                    <input placeholder={Lang('searchHold')} />
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
        for (let i in s) {
            c.push(
                <a key={i} hred="javascript:;"onClick={this.subClick.bind(this, event, i, s[i])}>{Lang(i)}</a>
            )
        }
        return (
            <div className="nav-box">
                {c}
            </div>
        )
    }
    subClick = (e, i, s) => {
        stopBubble(e);
        stopDefault(e);
        emitter.emit(EventDict.SPECIES_SUB_CLICK, {
            target: 'third',
            name: i,
            img: s.img
        })
    }
    renderContent = (content) => {
        let cnt = content.content
        let cls = content.class
        let c = []
        for (let i in cnt) {
            if (!cnt[i]) {
                c.push(
                    <li key={i}>
                        <a href="javascript:;" onClick={this.speciesClick.bind(this, event, i)}><span>&gt;</span> {Lang(i)}</a>
                    </li>
                )
            } else {
                c.push(
                    <li key={i}>
                        <a href="javascript:;" onClick={this.speciesClick.bind(this, event, i)}><span>&gt;</span> {Lang(i)}</a>
                        {this.renderSub(cnt[i])}
                    </li>
                )
            }
        }
        return (
            <div className="nav-div">
                <ul className={`nav-ul ${cls}`}>
                    {c}
                </ul>
            </div>
        )
    }
    speciesClick = (e, name) => {
        stopBubble(e)
        emitter.emit(EventDict.SPECIES_CLICK, {
            target: 'second',
            name: name
        })
    }
    render () {
        let {content} = this.props;
        return (
            <div className={`collapse collapse-${content.key}`} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                {this.renderContent(content)}
            </div>
        )
    }
}





