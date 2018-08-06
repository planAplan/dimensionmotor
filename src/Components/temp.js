import React, {Component} from 'react';

export default class Temp extends Component {
    constructor(props) {
        super(props)
        this.END = new Date(2018, (9 - 1), 1).getTime()
        this.state = {
            dateStr: this.getcurTime()
        }
    }
    componentWillMount () {
        let that = this
        this.interval = setInterval(() => {
            that.setState({
                dateStr: that.getcurTime()
            })
        }, 500)
    }
    componentWillUnmount () {
        this.interval && clearInterval(this.interval)
    }
    getcurTime = () => {
        let end = this.END;
        let cur = new Date().getTime();
        let minus = end - cur;
        let oneDay = 1000 * 60 * 60 * 24, oneHour = 1000 * 60 * 60, oneMinute = 1000 * 60, oneSecond = 1000
        let day = +(minus / oneDay).toFixed(),
            hour = +(((minus - day * oneDay) / oneHour).toFixed()),
            minute = +(((minus - day * oneDay - hour * oneHour) / oneMinute).toFixed()),
            second = +(((minus - day * oneDay - hour * oneHour - minute * oneMinute) / oneSecond).toFixed());
        hour = hour < 0 ? 24 + hour : hour;
        minute = minute < 0 ? 60 + minute : minute;
        second = second < 0 ? 60 + second : second;
        return `${day}天${hour < 10 ? '0' + hour : hour}时${minute < 10 ? '0' + minute : minute}分${second < 10 ? '0' + second : second}秒`
    }
    getToday = () => {
        let dt = new Date(), f = this.format
        let year = dt.getFullYear(),
            month = f(dt.getMonth() + 1),
            date = f(dt.getDate()),
            hour = f(dt.getHours()),
            minute = f(dt.getMinutes()),
            second = f(dt.getSeconds())
        return `${year}年${month}月${date}日 ${hour}：${minute}：${second}`
    }
    format = (str) => {
        return +str < 10 ? '0' + str : str
    }
    render () {
        let dateStr = this.state.dateStr
        return (
            <div className="block">
                <div className="tips">
                    <div className="tips1">深圳市维度机电有限公司</div>
                    <div className="tips2">网站升级维护中...</div>
                </div>
                <div className="foot-tips">
                    <div className="tips3">T: +86-755-23061319 E: info@dmotec.com</div>
                    <div className="tips4">Copyright &copy;2018 by DMO Technology co.,Ltd. all rights reserved</div>
                </div>
                <div className="time">{dateStr}</div>
                <div className="today">{this.getToday()}</div>
            </div>
        )
    }
}