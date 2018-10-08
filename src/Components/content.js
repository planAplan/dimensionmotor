import React, {Component} from 'react';
import Lang from '../lib/Lang';

export default class Content extends Component {
    state = {
        focus: false
    }
    handleMouseEnter = (e) => {
    }
    componentDidMount () {
        setTimeout(() => {
            $('#banner').flexslider({
                animation: "slide",
                direction:"horizontal",
                easing:"swing",
                controlNav: true,
                pauseOnHover:true,
                slideshow: true
            });
        }, 200)
    }
    render () {
        return (
            <div className="content-wrap">
                <div id="banner" className="content flexslider">
                    <ul class="slides">
                        {/* <li>
                            <a href="javascript:;">
                                <img src={`${require('../images/carousel-1.jpg')}`} alt="" />
                            </a>
                        </li> */}
                        <li>
                            <a href="javascript:;">
                                <img src={`${require('../images/carousel-2.jpg')}`} alt="" />
                                <div class="slide">
                                    <div class="main">
                                        <div class="caption">
                                            <div className="title">TORQUE MOTOR</div>
                                            <div className="describe">力矩电机又称DD马达，具有业内领先的性能，零维护需求，更简单的机械装备，更高的精度更强的扭矩输出能力，更高的可靠性，更小的工作噪音，可以满足多种机械设计需求。</div>
                                            <a href="javascript:;" className="more">
                                                {Lang('more')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={`${require('../images/carousel-3.jpg')}`} alt="" />
                                <div class="slide">
                                    <div class="main">
                                        <div class="caption">
                                            <div className="title">LINEAR MOTOR</div>
                                            <div className="describe">直线电机都可以直接安装到负载，因而不需要机械传动装置，可以大幅度提升可靠度。不采用容易磨损的机械传动部件大大降低了系统维护工作量，从而显著延长平均无故障时间，同时，优化了负载加速度，降低功耗，降低系统惯性，提升精度，这些都是直驱伺服系统解决方案所能带来的主要优势。</div>
                                            <a href="javascript:;" className="more">
                                                {Lang('more')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={`${require('../images/carousel-4.jpg')}`} alt="" />
                                <div class="slide">
                                    <div class="main">
                                        <div class="caption blackCol">
                                            <div className="title">WORK PLATFORM</div>
                                            <div className="describe">维度精密科技对位平台采用创新高精度直驱技术实现空间多角度任意位置的定位。直驱系统解决方案所能带来的更多的优势：系统稳定、性价比高、处理速度快、对位精度高等等。同时可以系统定制，能根据客户需要定制系统和对系统进行修改，体现系统唯一性。</div>
                                            <a href="javascript:;" className="more">
                                                {Lang('more')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={`${require('../images/carousel-5.jpg')}`} alt="" />
                                <div class="slide">
                                    <div class="main">
                                        <div class="caption blackCol special">
                                            <div className="title">SERVO DRIVER</div>
                                            <div className="describe">维度精密科技伺服驱动器采用创新型软硬件设计，集卓越的伺服性能、超高的功率密度、简便的调试作业和丰富的功能等多重优势于一身，极具成本效益。它采用全新的电流环路设计，频率响应可达到行业领先的 3-5 kHz。</div>
                                            <a href="javascript:;" className="more">
                                                {Lang('more')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="children">
                    <div className="child-1">
                        <div className="child-1-1">
                            <span>核心技术</span>
                            <span>DIRECT DRIVE TECHNOLOGY</span>
                        </div>
                        <div className="child-1-2">
                            <span>应用方案</span>
                            <span>MOTION SOLUTIONS</span>
                        </div>
                    </div>
                    <div className="child-2">
                        <div className="child-2-1">
                            <span className="text-1">ABOUT DMO</span>
                            <span className="text-2">关于维度精密科技</span>
                            <span className="text-3">Dimension Motions ( DMO ) 维度精密科技主要研发直驱动力技术，致力于为人工智能自动化等复杂运动机制的设备，提供精确的速度、 准度和位置控制和应用装置。</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}