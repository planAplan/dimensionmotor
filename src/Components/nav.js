import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';

const BANNER_ITEM = [
    {
        key: 0,
        title: <FM id='home'/>,
        content: false
    },
    {
        key: 1,
        title: <FM id='company'/>,
        content:
         <div className="nav-div">
            <ul className="nav-ul">
                <li>
                    <a href="javascript:;"><span>&gt;</span>公司简介</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>企业文化</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>加入维度</a>
                </li>
            </ul>

        </div>
    },
    {
        key: 2,
        title: <FM id='product'/>,
        content: 
        <div className="nav-div">
            <ul className="nav-ul float">
                <li>
                    <a href="javascript:;"><span>&gt;</span>有框架力矩电机</a>
                    <div className="nav-box">
                        <a hred="javascript:;">TFO080</a>
                        <a hred="javascript:;">TFI112</a>
                        <a hred="javascript:;">TFO140</a>
                        <a hred="javascript:;">TFO170</a>
                        <a hred="javascript:;">TFO220</a>
                        <a hred="javascript:;">TFO224</a>
                        <a hred="javascript:;">TFO260</a>
                        <a hred="javascript:;">TFO263</a>
                        <a hred="javascript:;">TFO325</a>
                        <a hred="javascript:;">TFI420</a>
                    </div>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>无框架力矩电机</a>
                    <div className="nav-box">
                        <a hred="javascript:;">TB1142</a>
                        <a hred="javascript:;">TBI170</a>
                        <a hred="javascript:;">TBI175</a>
                        <a hred="javascript:;">TBI200</a>
                    </div>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>无铁芯直线电机</a>
                    <div className="nav-box">
                        <a hred="javascript:;">LMU2</a>
                        <a hred="javascript:;">LMU3</a>
                        <a hred="javascript:;">LMU4</a>
                        <a hred="javascript:;">LMU5</a>
                        <a hred="javascript:;">LMU6</a>
                        <a hred="javascript:;">LMU7</a>
                        <a hred="javascript:;">LMU8</a>
                    </div>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>有铁芯直线电机</a>
                    <div className="nav-box">
                        <a hred="javascript:;">LMF1</a>
                        <a hred="javascript:;">LMF2</a>
                        <a hred="javascript:;">LMF3</a>
                        <a hred="javascript:;">LMF4</a>
                    </div>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>直线电机模组</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>对位平台</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>音圈电机</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>伺服驱动</a>
                </li>
            </ul>

        </div>
    },
    {
        key: 3,
        title: <FM id='apply'/>,
        content: 
        <div className="nav-div">
            <ul className="nav-ul">
                <li>
                    <a href="javascript:;"><span>&gt;</span>直驱应用</a>
                </li>
                <li>
                    <a href="javascript:;"><span>&gt;</span>行业新闻</a>
                </li>
            </ul>

        </div>
    },
    {
        key: 4,
        title: <FM id='technology'/>,
        content: 
        <div className="nav-div">
        <ul className="nav-ul">
            <li>
                <a href="javascript:;"><span>&gt;</span>资料下载</a>
            </li>
            <li>
                <a href="javascript:;"><span>&gt;</span>客户服务</a>
            </li>
            <li>
                <a href="javascript:;"><span>&gt;</span>知识库</a>
            </li>
        </ul>

    </div>
    },
    // {
    //     key: 3,
    //     title: <FM id='download'/>,
    //     content: <div>3</div>
    // },
    {
        key: 5,
        title: <FM id='contact us'/>,
        content: false
        // <div className="nav-div">
        //     <ul className="nav-ul">
        //         <li>
        //             <a href="javascript:;">咨询热线: 0755-23061319</a>
        //         </li>
        //         <li>
        //             <a href="javascript:;">邮箱: info@dmotec.com</a>
        //         </li>
        //         <li>
        //             <a href="javascript:;">地址:深圳市南山区西丽红花岭工业区八栋502</a>
        //         </li>
        //         <li>
        //             <a href="javascript:;">Copyright &copy; 2018深圳市维度机电有限公司</a>
        //         </li>
        //     </ul>

        // </div>
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
                    navTop ? <div className="logo"><span></span></div> : null
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
                    collapse && collapse.content ? <Collapse content={collapse} onMouseEnter={this.itemFocus.bind(this, collapse.key)} onMouseLeave={this.itemBlur}/> : null
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
                {content.content}
            </div>
        )
    }
}