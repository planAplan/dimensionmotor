import {getLang} from '../constant';

const local = getLang() || 'zh'
const langDict  = (fn) => {
    let dict = fn(local).default
    return (key) => {
        if (key in dict) {
            return dict[key]
        }
        return key
    }
}

export default langDict
