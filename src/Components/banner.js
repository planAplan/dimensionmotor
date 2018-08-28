import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';
import Navbar from './nav';



export default class Banner extends Component {
    render () {
        
        return (
            <div className="header">
                <div className="logo"></div>
                <Navbar />
                {/* <div className="search">
                    <input placeholder={lang === 'zh' ? '输入您的搜索词汇' : 'Enter your search term'} />
                    <button type="submit">
                        <i class="icon-search"></i>
                        <span class="text">{<FM id="search"/>}</span>
                    </button>
                </div> */}
                {/* <div className="shop">
                    <ul>
                        <li><div className="language">{lang === 'zh' ? 'ZH' : 'EN'}</div></li>
                        <li><div className="all" title={lang === 'zh'? '展示所有产品' : 'Exhibiting Full Product'}>ALL</div></li>
                    </ul>
                </div> */}
            </div>
        );
    }
}