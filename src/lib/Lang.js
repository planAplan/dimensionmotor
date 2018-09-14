import langDict from '../components/lang';
const Lang = langDict((lang) => {
    return require('../components/lang/' + lang)
})

export default Lang
