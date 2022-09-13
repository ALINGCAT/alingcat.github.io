const 白卷 = 1;
const 传说 = 2;
const 金卷 = 4;
const 紫卷 = 8;
const 黑卷 = 16;
const 剑 = 1;
const 锤 = 2;
const 弓 = 4;
const 枪 = 8;
const 法 = 16;
const 奶 = 32;
const 东部王国_柳国 = 1;
const 狂欢城镇 = 2;
const 格兰西亚帝国 = 4;
const 自由的勇士 = 8;
const 涅斯帝国 = 16;
const 东部王国_汉 = 32;
const 南西部联盟 = 64;
const 罗曼共和国 = 128;
const 女神教 = 256;
const 诺斯加尔德 = 512;
const 少数名族联合 = 1024;
const 东部王国_陈 = 2048;
const 支援所有势力 = 4096;

var 勇士列表 = [
    {
        Name : "弗莱克",
        Img : "https://patchwiki.biligame.com/images/cq/d/d0/3c56idk7o2or237r2zuf5qn9v87jpdm.png",
        Link : "https://wiki.biligame.com/cq/%E6%B0%94%E7%90%83%E7%88%86%E7%82%B8%E5%BC%97%E8%8E%B1%E5%85%8B",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 狂欢城镇,
        昵称 : ["气球","气球剑"]
    },
    {
        Name : "丹普西",
        Img : "https://patchwiki.biligame.com/images/cq/7/70/kiw2kilr0th01slub46y3amvsn91tfr.png",
        Link : "https://wiki.biligame.com/cq/%E7%8B%82%E6%9A%B4%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%B9%E6%99%AE%E8%A5%BF",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 涅斯帝国,
        昵称 : ["普西", "浦西"]
    },
    {
        Name : "蕾文·布兰温",
        Img : "https://patchwiki.biligame.com/images/cq/2/29/dd4f84snz1rwr170htmjj2bii2cu23h.png",
        Link : "",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["阳妈"]
    },
    {
        Name : "阿斯摩太",
        Img : "https://patchwiki.biligame.com/images/cq/0/03/tg0wb3f6v8mmayurjwfou7vitipddz2.png",
        Link : "https://wiki.biligame.com/cq/%E9%AD%85%E6%83%91%E7%9A%84%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E9%98%BF%E6%96%AF%E6%91%A9%E5%A4%AA",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 少数名族联合,
        昵称 : ["色色","魅魔"]
    },
    /*
    {
        Name : "",
        Img : "",
        Link : "",
        卷型 : ,
        职业 : ,
        势力 : ,
        昵称 : []
    },
    */
];

const 卷型图片 = new Map([
    [白卷, 'https://patchwiki.biligame.com/images/cq/9/9d/49g6ae9xr4y44sb02ku6mfr8q3h1jy1.png'],
    [传说, 'https://patchwiki.biligame.com/images/cq/b/ba/g2rpmmqm2b8kl77d8u4q2yh80q4xpdx.png'],
    [金卷, 'https://patchwiki.biligame.com/images/cq/1/16/fc556ij4mwexmzy5st9cq7sz57n7cm3.png'],
    [紫卷, 'https://patchwiki.biligame.com/images/cq/3/30/svl0mxltmd1klx4f9ippv8u553cujc6.png'],
    [黑卷, 'https://patchwiki.biligame.com/images/cq/6/67/77x156x2gzvtn6fcy9zk30drke7ykyt.png']
]);

const 职业图片 = new Map([
    [剑, 'https://patchwiki.biligame.com/images/cq/b/b6/i918j124cq4pfpyqfcdeieu6s0evcmg.png'],
    [锤, 'https://patchwiki.biligame.com/images/cq/2/25/31qhbls0u0tlioevx4e1pd99ug4q3rj.png'],
    [弓, 'https://patchwiki.biligame.com/images/cq/5/5e/9bmv4pubawj4b8kqdemg7y8dq3q0rrh.png'],
    [枪, 'https://patchwiki.biligame.com/images/cq/4/4a/9x6hyeq3t6iyllq89cyx6ff8xpn47ui.png'],
    [法, 'https://patchwiki.biligame.com/images/cq/a/a4/4ppk96n7abwz5hex4k74w43uo2aeat8.png'],
    [奶, 'https://patchwiki.biligame.com/images/cq/7/73/nj2axmstgqvzchluw1vjcb1s4z1uwy6.png']
]);

const 势力图片 = new Map([
    [东部王国_柳国, 'https://patchwiki.biligame.com/images/cq/thumb/7/76/fks9uvhu8xzsu8bg8wbj0de0milk4p9.png/22px-%E4%B8%9C%E9%83%A8%E7%8E%8B%E5%9B%BD-%E6%9F%B3%E5%9B%BD_icon.png'],
    [狂欢城镇, 'https://patchwiki.biligame.com/images/cq/thumb/0/03/g7d027nr7z61ql2bqr865g4dqnsruix.png/22px-%E7%8B%82%E6%AC%A2%E5%9F%8E%E9%95%87_icon.png'],
    [格兰西亚帝国, 'https://patchwiki.biligame.com/images/cq/thumb/b/ba/kitoorcnpxobx66zk3ptohj2cic787v.png/22px-%E6%A0%BC%E5%85%B0%E8%A5%BF%E4%BA%9A%E5%B8%9D%E5%9B%BD_icon.png'],
    [自由的勇士, 'https://patchwiki.biligame.com/images/cq/thumb/4/4a/m1h4blh5x4u5zs27lpl67z8b5q7x8j1.png/22px-%E8%87%AA%E7%94%B1%E7%9A%84%E5%8B%87%E5%A3%AB_icon.png'],
    [涅斯帝国, 'https://patchwiki.biligame.com/images/cq/thumb/6/67/f1rt6simpztvl0vuxwjqrktcv43b244.png/22px-%E6%B6%85%E6%96%AF%E5%B8%9D%E5%9B%BD_icon.png'],
    [东部王国_汉, 'https://patchwiki.biligame.com/images/cq/thumb/9/93/38pvb7vbn6a4dxecc7mxm2nhuybl1u0.png/22px-%E4%B8%9C%E9%83%A8%E7%8E%8B%E5%9B%BD-%E6%B1%89_icon.png'],
    [南西部联盟, 'https://patchwiki.biligame.com/images/cq/thumb/c/c5/j0r9l9y6jrh8c6guja60gtvo9vianzl.png/22px-%E5%8D%97%E8%A5%BF%E9%83%A8%E8%81%94%E7%9B%9F_icon.png'],
    [罗曼共和国, 'https://patchwiki.biligame.com/images/cq/thumb/6/63/leqv4w498g41adsvld2ou9bdpymnoev.png/22px-%E7%BD%97%E6%9B%BC%E5%85%B1%E5%92%8C%E5%9B%BD_icon.png'],
    [女神教, 'https://patchwiki.biligame.com/images/cq/thumb/e/e0/768pc94j57jf4bo6cibqy4ou3777vhm.png/22px-%E5%A5%B3%E7%A5%9E%E6%95%99_icon.png'],
    [诺斯加尔德, 'https://patchwiki.biligame.com/images/cq/thumb/0/03/9bu99w42dj0usg2uzke5xxrmnpcqs3e.png/22px-%E8%AF%BA%E6%96%AF%E5%8A%A0%E5%B0%94%E5%BE%B7_icon.png'],
    [少数名族联合, 'https://patchwiki.biligame.com/images/cq/thumb/1/11/brbxrn1h2xpd69n21uoeafmc31xw6oi.png/22px-%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E8%81%94%E5%90%88_icon.png'],
    [东部王国_陈, 'https://patchwiki.biligame.com/images/cq/thumb/8/8d/clt5lhw18hyozgxue7p1po3oab392g8.png/22px-%E4%B8%9C%E9%83%A8%E7%8E%8B%E5%9B%BD-%E9%99%88_icon.png'],
    [支援所有势力, 'https://patchwiki.biligame.com/images/cq/a/af/qgo83630p64z8jiij2mk683ifv8sduk.png']
]);

const 势力文本 = new Map([
    [东部王国_柳国, "东部王国_柳国"],
    [狂欢城镇, "狂欢城镇"],
    [格兰西亚帝国, "格兰西亚帝国"],
    [自由的勇士, "自由的勇士"],
    [涅斯帝国, "涅斯帝国"],
    [东部王国_汉, "东部王国_汉"],
    [南西部联盟, "南西部联盟"],
    [罗曼共和国, "罗曼共和国"],
    [女神教, "女神教"],
    [诺斯加尔德, "诺斯加尔德"],
    [少数名族联合, "少数名族联合"],
    [东部王国_陈, "东部王国_陈"],
    [支援所有势力, "支援所有势力"]
]);