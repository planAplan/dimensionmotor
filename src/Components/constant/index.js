const EventDict = {
    CHANGE_LANG: 'change-lang'
}
const getLoaclLang = () => {
    //获取本地语言
    const language = (navigator.languages && navigator.languages[0]) ||
                    navigator.language ||
                    navigator.userLanguage;
    const local = language.toLowerCase().split(/[_-]+/)[0];
    return local
}
const getLang = () => {
    return localStorage.getItem('lang')
}
const setLang = (lang) => {
    localStorage.setItem('lang', lang)
    window.curLang = lang
}
export {
    EventDict,
    getLang,
    setLang,
    getLoaclLang
}