import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';

export default class Footer extends Component {
    render () {
        return (
            <div class="footer">
                <div className="footer_content">
                    <div class="footer_Ldeil">
                        <div className="attention">
                        </div>
                        <div className="summary">
                        </div>
                        <div><a href="javascript:;" className="support"></a></div>
                    </div>
                    <div className="footer_menu">
                        <dl>
                            <dt>关于我们</dt>
                            <dd><a href="javascript:;">公司简介</a></dd>
                            <dd><a href="javascript:;">企业文化</a></dd>
                            <dd><a href="javascript:;">加入维度</a></dd>
                        </dl>
                        <dl className="flex">
                            <dt>产品中心</dt>
                            <dl>
                                <dd><a href="javascript:;">有框架力矩电机</a></dd>
                                <dd><a href="javascript:;">无框架力矩电机</a></dd>
                                <dd><a href="javascript:;">无铁芯直线电机</a></dd>
                                <dd><a href="javascript:;">有铁芯直线电机</a></dd>
                                <dd><a href="javascript:;">直线电机模组</a></dd>
                            </dl>
                            <dl>
                                <dd><a href="javascript:;">对位平台</a></dd>
                                <dd><a href="javascript:;">音圈电机</a></dd>
                                <dd><a href="javascript:;">伺服驱动</a></dd>
                            </dl>
                        </dl>
                        <dl>
                            <dt>应用中心</dt>
                            <dd><a href="javascript:;">直驱应用</a></dd>
                            <dd><a href="javascript:;">行业新闻</a></dd>
                        </dl>
                        <dl>
                            <dt>技术中心</dt>
                            <dd><a href="javascript:;">资料下载</a></dd>
                            <dd><a href="javascript:;">客户服务</a></dd>
                            <dd><a href="javascript:;">知识库</a></dd>
                        </dl>
                        <dl>
                            <dt>联系我们</dt>
                            <dd><a href="javascript:;">咨询热线: 0755-23061319</a></dd>
                            <dd><a href="javascript:;">邮箱: info@dmotec.com</a></dd>
                            <dd><a href="javascript:;">地址:深圳市南山区西丽红花岭工业区八栋502</a></dd>
                            <dd><a href="javascript:;">Copyright &copy; 2018深圳市维度机电有限公司</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}