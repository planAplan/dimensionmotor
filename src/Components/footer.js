import React, {Component} from 'react';
import { FormattedMessage as FM} from 'react-intl';

export default class Footer extends Component {
    render () {
        return (
            <div class="footer">
                <div class="footer_Ldeil">
                    <div class="attention">
                    </div>
                    <div class="summary">
                    </div>
                    <div><a href="javascript:;" class="support"></a></div>
                </div>
                <div class="footer_menu">
                    <dl>
                        <dt>公司</dt> <dd><a href="">公司概况</a></dd> <dd><a href="">经营理念</a></dd> <dd><a href="">发展历程</a></dd> <dd><a href="">公司荣誉</a></dd> <dd><a href="">新闻中心</a></dd>
                    </dl>
                    <dl>
                        <dt>解决方案</dt> <dd><a href="">核心技术</a></dd> <dd><a href="">解决方案</a></dd>
                    </dl>
                    <dl>
                        <dt>产品</dt> <dd><a href="">智能控制器</a></dd> <dd><a href="">锂电池</a></dd> <dd><a href="">高效电机</a></dd>
                    </dl>
                    <dl>
                        <dt>能力</dt> <dd><a href="">研发实力</a></dd> <dd><a href="">生产能力</a></dd> <dd><a href="">品质认证</a></dd> <dd><a href="">供应链</a></dd>
                    </dl>
                    <dl>
                        <dt>投资者关系</dt>
                    </dl>
                    <dl>
                        <dt>职业发展</dt> <dd><a href="">社会招聘</a></dd> <dd><a href="">工作环境</a></dd> <dd><a href="">薪资福利</a></dd>
                    </dl>
                    <dl>
                        <dt>联系我们</dt> <dd><a href="">深圳总部</a></dd> <dd><a href="">惠州/杭州/重庆</a></dd> <dd><a href="">海外办事处</a></dd>
                        
                    </dl>
                </div>

            </div>
        )
    }
}