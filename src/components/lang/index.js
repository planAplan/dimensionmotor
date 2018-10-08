import {getLang} from '../constant';

// const local = getLang()
const langDict  = (fn) => {
    let local = getLang()
    if (typeof local === 'string') {
        if (local === 'null') {
            local = 'zh'
        }
    } else if (local === null || local === undefined) {
        local = 'zh'
    }
    let dict = fn(local).default
    return (key) => {
        if (key in dict) {
            return dict[key]
        }
        return key
    }
}

export default langDict
