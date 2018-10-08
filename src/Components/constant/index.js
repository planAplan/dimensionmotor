import React from 'react';

const EventDict = {
    CHANGE_LANG: 'change-lang',
    NAV_ITEM_CLICK: 'navItemClick',
    SPECIES_CLICK: 'speciesClick',
    SPECIES_SUB_CLICK: 'speciesSubClick',
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
    let local = localStorage.getItem('lang')
    if (typeof local === 'string') {
        if (local === 'null') {
            local = 'zh'
        }
    } else if (local === null || local === undefined) {
        local = 'zh'
    }
    return local
}
const setLang = (lang) => {
    localStorage.setItem('lang', lang)
    window.curLang = lang
}

const BANNER_ITEM = [
    {
        key: 0,
        title: 'home',
        content: false
    },
    {
        key: 1,
        title: 'company',
        content: {
            '公司简介': false,
            '企业文化': false,
            '加入维度': false,
        }
    },
    {
        key: 2,
        title: 'product',
        class: 'float',
        content: {
            'haveFrame': {
                'TFO080': {img: [require('../third/images/haveFrame/TFO080.png'),]},
                'TFI112': {img: [require('../third/images/haveFrame/TFI112.png'),]},
                'TFO140': {img: [require('../third/images/haveFrame/TFO140.png'),]},
                'TFO170': {img: [require('../third/images/haveFrame/TFO170.png'),]},
                'TFO220': {img: [require('../third/images/haveFrame/TFO220.png'),]},
                'TFO224': {img: [require('../third/images/haveFrame/TFO224.png'),]},
                'TFO260': {img: [require('../third/images/haveFrame/TFO260.png'),]},
                'TFO263': {img: [require('../third/images/haveFrame/TFO263.png'),]},
                'TFO325': {img: [require('../third/images/haveFrame/TFO325.png'),]},
                'TFI420': {img: [require('../third/images/haveFrame/TFI420.png'),]},
            },
            'notFrame': {
                'TBI142': {img: [require('../third/images/notFrame/TBI142.png'),]},
                'TBI170': {img: [require('../third/images/notFrame/TBI170.png'),]},
                'TBI175': {img: [require('../third/images/notFrame/TBI175.png'),]},
                'TBI200': {img: [require('../third/images/notFrame/TBI200.png'),]},
            },
            'notIronCore': {
                'LMU2': {img: [require('../third/images/notIronCore/LMU2.jpg'),require('../third/images/notIronCore/LMU2尺寸.jpg'),]},
                'LMU3': {img: [require('../third/images/notIronCore/LMU3.jpg'),require('../third/images/notIronCore/LMU3尺寸.jpg'),]},
                'LMU4': {img: [require('../third/images/notIronCore/LMU4.jpg'),require('../third/images/notIronCore/LMU4尺寸.jpg'),]},
                'LMU5': {img: [require('../third/images/notIronCore/LMU5.jpg'),require('../third/images/notIronCore/LMU5尺寸.jpg'),]},
                'LMU6': {img: [require('../third/images/notIronCore/LMU6.jpg'),require('../third/images/notIronCore/LMU6尺寸.jpg'),]},
                'LMU7': {img: [require('../third/images/notIronCore/LMU7.jpg'),require('../third/images/notIronCore/LMU7尺寸.jpg'),]},
                'LMU8': {img: [require('../third/images/notIronCore/LMU8.jpg'),require('../third/images/notIronCore/LMU8尺寸.jpg'),]},
            },
            'haveIronCore': {
                'LMF1': {img: [require('../third/images/haveIronCore/LMF1.jpg'),require('../third/images/haveIronCore/LMF1尺寸.jpg'),]},
                'LMF2': {img: [require('../third/images/haveIronCore/LMF2.jpg'),require('../third/images/haveIronCore/LMF2尺寸.jpg'),]},
                'LMF3': {img: [require('../third/images/haveIronCore/LMF3.jpg'),require('../third/images/haveIronCore/LMF3尺寸.jpg'),]},
                'LMF4': {img: [require('../third/images/haveIronCore/LMF4.jpg'),require('../third/images/haveIronCore/LMF4尺寸.jpg'),]},
            },
            'dieSet': {
                'LS125': {img: [require('../third/images/dieSet/LS125.jpg')]},
                'LS200': {img: [require('../third/images/dieSet/LS200.jpg')]},
            },
            'platform': {
                'XYR100': {img: [require('../third/images/platform/XYR100.jpg')]},
                'XYR160': {img: [require('../third/images/platform/XYR160.jpg')]},
            },
            'voiceCoilMotor': {
                '音圈电机': {img: [require('../third/images/voiceCoilMotor/音圈电机.jpg')]},
            },
            'servoDrive': false,
        }
    },
    {
        key: 3,
        title: 'apply',
        content: {
            '直驱应用': false,
            '行业新闻': false,
        }
    },
    {
        key: 4,
        title: 'technology',
        content: {
            '资料下载': false,
            '客户服务': false,
            '知识库': false,
        }
    },
    {
        key: 5,
        title: 'contactUs',
        content: false,
        footer: [
            <dd key="1"><a href="javascript:;">咨询热线: 0755-23061319</a></dd>,
            <dd key="2"><a href="mailto:info@dmotec.com?subject=致：深圳维度机电有限公司&body=深圳维度机电有限公司欢迎您！（发送正文时，可删除本行，非常感谢！）">邮箱: info@dmotec.com</a></dd>,
            <dd key="3"><a href="javascript:;">地址:深圳市南山区西丽红花岭工业区八栋502</a></dd>,
            <dd key="4"><a href="javascript:;">Copyright &copy; 2018深圳市维度机电有限公司</a></dd>
        ]
    },
]

export {
    EventDict,
    getLang,
    setLang,
    getLoaclLang,
    BANNER_ITEM
}