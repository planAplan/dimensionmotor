import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';

const BANNER_ITEM = [
    {
        key: 0,
        title: <FM id='home'/>,
        content: <div>0</div>
    },
    {
        key: 1,
        title: <FM id='company'/>,
        content: <div>1</div>
    },
    {
        key: 2,
        title: <FM id='product'/>,
        content: <div>2</div>
    },
    {
        key: 3,
        title: <FM id='download'/>,
        content: <div>3</div>
    },
    {
        key: 4,
        title: <FM id='contact us'/>,
        content: <div>4</div>
    },
]

export default class Navbar extends Component {

    constructor(props){
        super(props);
        
        this.state = {
          navTop: false,
          collapse: false,
          searchPanel: false
        }
  
        this.offsetTop = 0;
    }
  
    componentDidMount(){
      if(this.navNode){
        this.offsetTop = this.navNode.offsetTop;
        window.addEventListener('scroll',this.handleScroll);
      }
    }
  
    handleScroll = () => {
        let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    
        if(!this.state.navTop && sTop >= this.offsetTop){
           this.setState({
             navTop: true
           })
        }
    
        if(sTop < this.offsetTop){
           this.setState({
             navTop:false
           })
        }
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
    render () {
        let {navTop, collapse, searchPanel} = this.state;
        let lang = window.languageWithoutRegionCode || 'en'
        return (
            <div ref={node => this.navNode = node} className={`nav${navTop ? ' fixed' : ''}`}>
                {
                    navTop ? <div className="logo"></div> : null
                }
                <ul className="navbar-nav">
                    {
                        BANNER_ITEM.map((item, id) => {
                            return (
                                <li key={id} className="nav-item" onMouseEnter={this.itemFocus.bind(this, id)} onMouseLeave={this.itemBlur} onClick={this.itemFocus}>{item.title}</li>
                            )
                        })
                    }
                    <li><div className="language">{lang === 'zh' ? 'ZH' : 'EN'}</div></li>
                    <li>
                        <i class="icon-search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}></i>
                        {
                            searchPanel ?
                            <ul className="search" onMouseEnter={this.handleSearch} onMouseLeave={this.handleSearchBlur}>
                                {/* <li><FM id="search"/></li> */}
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
                    collapse ? <Collapse content={collapse} onMouseEnter={this.itemFocus.bind(this, collapse.key)} onMouseLeave={this.itemBlur}/> : null
                }
            </div>
        )
    }
}

class Collapse extends Component {
    render () {
        let {content} = this.props;
        return (
            <div className={`collapse collapse-${content.key}`} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                {content.key}
            </div>
        )
    }
}