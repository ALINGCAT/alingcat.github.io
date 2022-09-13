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
const 少数民族联合 = 1024;
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
        Link : "https://wiki.biligame.com/cq/%E8%95%BE%E6%96%87%C2%B7%E5%B8%83%E5%85%B0%E6%B8%A9",
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
        势力 : 少数民族联合,
        昵称 : ["色色","魅魔"]
    },
    {
        Name : "罗尔夫",
        Img : "https://patchwiki.biligame.com/images/cq/e/e2/rbw91t8x2cu3g4a5vavfde6u6ax1obl.png",
        Link : "https://wiki.biligame.com/cq/%E7%8E%8B%E5%AE%A4%E4%BA%B2%E5%8D%AB%E9%98%9F%E9%95%BF%E7%BD%97%E5%B0%94%E5%A4%AB",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 诺斯加尔德,
        昵称 : ["船夫","奥拉夫"]
    },
    {
        Name : "哈迪斯",
        Img : "https://patchwiki.biligame.com/images/cq/3/39/2hdr8fsa1b6xidbtzdlrkes3ei7186k.png",
        Link : "https://wiki.biligame.com/cq/%E5%86%A5%E5%BA%9C%E7%9A%84%E8%BF%BD%E5%87%BB%E8%80%85%E5%93%88%E8%BF%AA%E6%96%AF",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 罗曼共和国,
        昵称 : ["玛卡里亚"]
    },
    {
        Name : "杰克",
        Img : "https://patchwiki.biligame.com/images/cq/a/a5/1b1io5rutsyqklak3gut1gx1nwc2hux.png",
        Link : "https://wiki.biligame.com/cq/%E5%9B%9B%E5%A4%A7%E5%A4%A9%E7%8E%8B%E6%9D%B0%E5%85%8B",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["Jack"]
    },
    {
        Name : "阿瑞斯",
        Img : "https://patchwiki.biligame.com/images/cq/0/09/d52wdmeok07brx7nqxmtyomf9t6e2ba.png",
        Link : "https://wiki.biligame.com/cq/%E5%86%85%E5%BF%83%E4%BA%89%E6%96%97%E7%9A%84%E9%98%BF%E7%91%9E%E6%96%AF",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 罗曼共和国,
        昵称 : ["战神","泥头车"]
    },
    {
        Name : "雷迪斯",
        Img : "https://patchwiki.biligame.com/images/cq/2/27/5d519wfwnd5785uqurojecbzz01pjro.png",
        Link : "https://wiki.biligame.com/cq/%E8%97%A9%E5%80%99%E9%9B%B7%E8%BF%AA%E6%96%AF",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 南西部联盟,
        昵称 : ["侯爵","爵爷"]
    },
    {
        Name : "摩根",
        Img : "https://patchwiki.biligame.com/images/cq/1/13/pj68kgftftmd6ra9db0ihp3bseh8jbd.png",
        Link : "https://wiki.biligame.com/cq/%E5%8F%9B%E5%BE%92%E9%AA%91%E5%A3%AB%E6%91%A9%E6%A0%B9",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 自由的勇士,
        昵称 : ["叛剑","miss剑"]
    },
    {
        Name : "格温",
        Img : "https://patchwiki.biligame.com/images/cq/a/a7/ljdpk5bh0mmobdg4lqluqshtlamlm5z.png",
        Link : "",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : []
    },
    {
        Name : "涅菲尔",
        Img : "https://patchwiki.biligame.com/images/cq/b/b8/hyc96f8b3tf994p8xj5x8tjmrcbqyba.png",
        Link : "https://wiki.biligame.com/cq/%E6%B8%B4%E6%B1%82_%E6%B6%85%E8%8F%B2%E5%B0%94",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 自由的勇士,
        昵称 : ["木乃伊"]
    },
    {
        Name : "罗斯科娃",
        Img : "https://patchwiki.biligame.com/images/cq/b/bc/edyt54bqy00d8yjx0k7rz3z76jmnidh.png",
        Link : "https://wiki.biligame.com/cq/%E5%9C%A3%E5%9F%9F%E5%AE%88%E6%8A%A4%E8%80%85_%E7%BD%97%E6%96%AF%E7%A7%91%E5%A8%83",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 诺斯加尔德,
        昵称 : ["冰剑"]
    },
    {
        Name : "沈鹤圭",
        Img : "https://patchwiki.biligame.com/images/cq/7/7d/pofuhu992y6kgv26hyebmt7axd7f515.png",
        Link : "https://wiki.biligame.com/cq/%E4%B9%90%E6%9E%81%E7%94%9F%E6%82%B2_%E6%B2%88%E9%B9%A4%E5%9C%AD",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 东部王国_汉,
        昵称 : ["盲剑","带孝子"]
    },
    {
        Name : "兰蒂格瑞丝",
        Img : "https://patchwiki.biligame.com/images/cq/0/0d/cmtmlz9ni3wsvf6dbssy3zrpspfq5dg.png",
        Link : "https://wiki.biligame.com/cq/%E6%81%90%E6%80%96%E7%9A%84_%E5%85%B0%E8%92%82%E6%A0%BC%E7%91%9E%E4%B8%9D",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 诺斯加尔德,
        昵称 : ["钝剑","女武神"]
    },
    {
        Name : "艾基德娜",
        Img : "https://patchwiki.biligame.com/images/cq/a/ad/qkpd958c0l4pwrw1lu8o1jswb49jaff.png",
        Link : "https://wiki.biligame.com/cq/%E8%9B%87%E4%B9%8B%E5%A5%B3%E7%8E%8B_%E8%89%BE%E5%9F%BA%E5%BE%B7%E5%A8%9C",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["蛇剑"]
    },
    {
        Name : "颇尔垃加",
        Img : "https://patchwiki.biligame.com/images/cq/3/31/le07hm0qgbxhiic2qmgw9b73v7af5f0.png",
        Link : "https://wiki.biligame.com/cq/%E8%9A%95%E9%A3%9F%E7%81%B5%E9%AD%82%E7%9A%84%E9%A2%87%E5%B0%94%E5%9E%83%E5%8A%A0",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 狂欢城镇,
        昵称 : ["魔剑"]
    },
    {
        Name : "泉奈",
        Img : "https://patchwiki.biligame.com/images/cq/1/1a/kcloohkjr7rkeq84jntpz1jrgfnlcb3.png",
        Link : "https://wiki.biligame.com/cq/%E5%A5%B3%E4%BE%A0%E5%AE%A2_%E6%B3%89%E5%A5%88",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 东部王国_柳国,
        昵称 : ["瘸奈","子娜"]
    },
    {
        Name : "哈尔菲亚",
        Img : "https://patchwiki.biligame.com/images/cq/9/96/tt0aaax34ofibha1p82ha3qko41lniw.png",
        Link : "https://wiki.biligame.com/cq/%E5%B1%A0%E6%9D%80%E8%80%85_%E5%93%88%E5%B0%94%E8%8F%B2%E4%BA%9A",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 罗曼共和国,
        昵称 : ["鸟剑"]
    },
    {
        Name : "伊西丝",
        Img : "https://patchwiki.biligame.com/images/cq/2/25/cf7spyn8sj4ifc712tei64momuwodo2.png",
        Link : "https://wiki.biligame.com/cq/%E5%BC%95%E9%A2%86%E8%80%85_%E4%BC%8A%E8%A5%BF%E4%B8%9D",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["沙剑"]
    },
    {
        Name : "莎莎",
        Img : "https://patchwiki.biligame.com/images/cq/d/d8/48kmuyvtz3s5q7d3kloo1g0t06by1ft.png",
        Link : "https://wiki.biligame.com/cq/%E7%81%AB%E4%B9%8B%E9%AD%94%E5%A5%B3%E8%8E%8E%E8%8E%8E",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 狂欢城镇,
        昵称 : ["五杀剑"]
    },
    {
        Name : "博格斯",
        Img : "https://patchwiki.biligame.com/images/cq/a/a8/4h3uylt4nbbbrp0drvr3aworirixmcb.png",
        Link : "https://wiki.biligame.com/cq/%E5%86%A5%E5%B8%9D%C2%B7%E5%8D%9A%E6%A0%BC%E6%96%AF",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 自由的勇士,
        昵称 : ["冥王"]
    },
    {
        Name : "钟奎",
        Img : "https://patchwiki.biligame.com/images/cq/6/67/kgi8aaghzdiqrdig5xj093w9n927cey.png",
        Link : "https://wiki.biligame.com/cq/%E9%AC%BC%E7%8E%8B%E9%92%9F%E5%A5%8E",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 东部王国_汉,
        昵称 : ["钟馗"]
    },
    {
        Name : "希恩",
        Img : "https://patchwiki.biligame.com/images/cq/f/ff/7r8hsrxolp6q4ti927fw1qwcmgyllog.png",
        Link : "https://wiki.biligame.com/cq/%E6%9A%B4%E8%B5%B0%E5%83%B5%E5%B0%B8%E5%B8%8C%E6%81%A9",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["僵尸"]
    },
    {
        Name : "娅莉塔",
        Img : "https://patchwiki.biligame.com/images/cq/8/88/fifb5wefioxt8ui5fz19su5fvto4wlg.png",
        Link : "https://wiki.biligame.com/cq/%E6%A3%AE%E6%9E%97%E9%AD%94%E5%A5%B3%E5%A8%85%E8%8E%89%E5%A1%94",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 狂欢城镇,
        昵称 : ["荆棘"]
    },
    {
        Name : "莱昂内尔",
        Img : "https://patchwiki.biligame.com/images/cq/c/c7/cloxoqex0a0b9chw5x3bss25wxnxn0i.png",
        Link : "https://wiki.biligame.com/cq/%E9%BB%91%E9%AA%91%E5%A3%AB%E8%8E%B1%E6%98%82%E5%86%85%E5%B0%94",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 南西部联盟,
        昵称 : ["黑骑"]
    },
    {
        Name : "维多利亚",
        Img : "https://patchwiki.biligame.com/images/cq/6/60/qz42rockosw6atxgbsj7ku4vzlko9yq.png",
        Link : "https://wiki.biligame.com/cq/%E7%BA%A6%E5%AE%9A%E4%B9%8B%E7%BB%B4%E5%A4%9A%E5%88%A9%E4%BA%9A",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["维多","旗子"]
    },
    {
        Name : "郑成功",
        Img : "https://patchwiki.biligame.com/images/cq/6/67/irwh5jzq97jwjvvuv1pwu0ed5076u6z.png",
        Link : "https://wiki.biligame.com/cq/%E6%B0%91%E6%97%8F%E8%8B%B1%E9%9B%84%E9%83%91%E6%88%90%E5%8A%9F",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["王爷"]
    },
    {
        Name : "伊莎贝尔",
        Img : "https://patchwiki.biligame.com/images/cq/a/ae/qtnxrxevgbyzcjk8py3t9a818p052za.png",
        Link : "https://wiki.biligame.com/cq/%E5%BC%82%E8%83%BD%E8%80%85%E4%BC%8A%E8%8E%8E%E8%B4%9D%E5%B0%94",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["伊莎","一傻"]
    },
    {
        Name : "卞剑秀",
        Img : "https://patchwiki.biligame.com/images/cq/2/2e/l0x9j4e3cdyxqvpa93muuxp060l3966.png",
        Link : "https://wiki.biligame.com/cq/%E6%8D%95%E7%9B%97%E5%A4%A7%E5%B0%86%E5%8D%9E%E5%89%91%E7%A7%80",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 东部王国_汉,
        昵称 : ["韩剑","罕见","ntr剑"]
    },
    {
        Name : "乌兹门特",
        Img : "https://patchwiki.biligame.com/images/cq/f/fe/ruklyqpcu334o3bgn67sz05wm9hay2z.png",
        Link : "https://wiki.biligame.com/cq/%E6%97%8F%E9%95%BF%E4%B9%8C%E5%85%B9%E9%97%A8%E7%89%B9",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 诺斯加尔德,
        昵称 : ["狗剑"]
    },
    {
        Name : "亚伯",
        Img : "https://patchwiki.biligame.com/images/cq/4/4d/hm088zaexbb0xpjfg0swbxksd8z1fpd.png",
        Link : "https://wiki.biligame.com/cq/%E7%8B%A9%E9%AD%94%E7%8C%8E%E4%BA%BA%E4%BA%9A%E4%BC%AF",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 南西部联盟,
        昵称 : ["鸭脖"]
    },
    {
        Name : "香织",
        Img : "https://patchwiki.biligame.com/images/cq/c/c1/1w6lekpcsnubf73caz7b7jbm8t7q3wb.png",
        Link : "https://wiki.biligame.com/cq/%E4%BA%8C%E5%A4%A9%E4%B8%80%E6%B5%81%E9%A6%99%E7%BB%87",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 东部王国_柳国,
        昵称 : []
    },
    {
        Name : "蒙泰",
        Img : "https://patchwiki.biligame.com/images/cq/5/50/1l6gvw2jvhh545tl8yhteh39eh5yh09.png",
        Link : "https://wiki.biligame.com/cq/%E8%92%99%E6%B3%B0%E7%BB%88%E6%9E%81%E5%9E%8B",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 涅斯帝国,
        昵称 : ["电视机"]
    },
    {
        Name : "薇薇安",
        Img : "https://patchwiki.biligame.com/images/cq/3/3b/72njg1boucgl0za4wmyk4p4xplcd211.png",
        Link : "https://wiki.biligame.com/cq/%E7%BB%9D%E5%AF%B9%E9%AD%94%E7%8E%8B%E8%96%87%E8%96%87%E5%AE%89",
        卷型 : 金卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["VVA","SP剑魂解放"]
    },
    {
        Name : "须佐能乎",
        Img : "https://patchwiki.biligame.com/images/cq/f/fe/q5wkcy9p3c2b7fucxgfxnzpkq0mla6q.png",
        Link : "https://wiki.biligame.com/cq/%E5%B0%86%E5%86%9B%E9%A1%BB%E4%BD%90%E8%83%BD%E4%B9%8E",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 东部王国_柳国,
        昵称 : ["须佐"]
    },
    {
        Name : "圣女贞德",
        Img : "https://patchwiki.biligame.com/images/cq/6/64/0plh6qz7d2qr4jad95q6k2r05tapz5e.png",
        Link : "https://wiki.biligame.com/cq/%E9%92%A2%E9%93%81%E9%AA%91%E5%A3%AB%E5%9C%A3%E5%A5%B3%E8%B4%9E%E5%BE%B7",
        卷型 : 白卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["贞"]
    },
    {
        Name : "罗什福尔",
        Img : "https://patchwiki.biligame.com/images/cq/2/2b/dd5qip1b6i9jjqzirbiqwx1ii8o921h.png",
        Link : "https://wiki.biligame.com/cq/%E5%BF%85%E8%83%9C%E7%9A%84%E7%BD%97%E4%BB%80%E7%A6%8F%E5%B0%94",
        卷型 : 传说,
        职业 : 剑,
        势力 : 南西部联盟,
        昵称 : ["胡子"]
    },
    {
        Name : "里昂",
        Img : "https://patchwiki.biligame.com/images/cq/e/ed/mf256gqqxtres8lpfrmr54c4uoztxwy.png",
        Link : "https://wiki.biligame.com/cq/%E5%85%89%E6%98%8E%E5%89%91%E5%A3%AB%E9%87%8C%E6%98%82",
        卷型 : 传说,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["剑主","黄毛"]
    },
    {
        Name : "毕奥",
        Img : "https://patchwiki.biligame.com/images/cq/d/d0/pvlifvwodpy9aq8m14o8t8b4quan6w4.png",
        Link : "https://wiki.biligame.com/cq/%E5%99%AC%E6%98%9F%E8%80%85%E6%AF%95%E5%A5%A5",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["龙剑","星剑"]
    },
    {
        Name : "扎特-1",
        Img : "https://patchwiki.biligame.com/images/cq/9/96/ttvatkpf7b9zqe5pb08e7juvzsj3zsy.png",
        Link : "https://wiki.biligame.com/cq/%E6%89%8E%E7%89%B9-1",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["扎克","黑鬼"]
    },
    {
        Name : "乔凡娜",
        Img : "https://patchwiki.biligame.com/images/cq/5/5d/21tlekqt093fwblp8jzzxtqwo9ta2fq.png",
        Link : "https://wiki.biligame.com/cq/%E4%B9%94%E5%87%A1%E5%A8%9C",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : []
    },
    {
        Name : "泰里翁",
        Img : "https://patchwiki.biligame.com/images/cq/d/d6/0q27iav32u1n38e4v9n4ezluyd2r1v9.png",
        Link : "https://wiki.biligame.com/cq/%E6%B3%B0%E9%87%8C%E7%BF%81",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["盗贼","刺客"]
    },
    {
        Name : "欧尔贝克·艾因斯伯格",
        Img : "https://patchwiki.biligame.com/images/cq/b/b2/ln19g8pri0zrdjxmhnv15s5cmixt3bq.png",
        Link : "https://wiki.biligame.com/cq/%E6%AC%A7%E5%B0%94%E8%B4%9D%E5%85%8B%C2%B7%E8%89%BE%E5%9B%A0%E6%96%AF%E4%BC%AF%E6%A0%BC",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["剑客","剑士"]
    },
    {
        Name : "子龙",
        Img : "https://patchwiki.biligame.com/images/cq/6/65/pk92o2mynzf0fn7hqop0uexbofvnedd.png",
        Link : "https://wiki.biligame.com/cq/%E4%BA%94%E8%99%8E%E5%A4%A7%E5%B0%86%E5%86%9B%E5%AD%90%E9%BE%99",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 东部王国_陈,
        昵称 : ["赵云","讨伐材料兑换"]
    },
    {
        Name : "蕊儿",
        Img : "https://patchwiki.biligame.com/images/cq/7/7c/fac2o5l1pwgqpw5fh7bzx5hzyrz927b.png",
        Link : "https://wiki.biligame.com/cq/%E8%95%8A%E5%84%BF",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 南西部联盟,
        昵称 : ["灵魂要塞材料兑换"]
    },
    {
        Name : "南瓜女王",
        Img : "https://patchwiki.biligame.com/images/cq/5/5e/b2hn0cubjk1zgqs11npv09pcm2tamqt.png",
        Link : "https://wiki.biligame.com/cq/%E9%AD%94%E5%A5%B3%E5%8D%97%E7%93%9C%E5%A5%B3%E7%8E%8B",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 狂欢城镇,
        昵称 : ["电锯","女瓜"]
    },
    {
        Name : "波基郎",
        Img : "https://patchwiki.biligame.com/images/cq/a/a9/kh9u4080o39ku8nr8ip7g60z3tm4xh7.png",
        Link : "https://wiki.biligame.com/cq/%E6%B3%A2%E5%9F%BA%E9%83%8E",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["狗","狗棍","狗哥"]
    },
    {
        Name : "玛蕾",
        Img : "https://patchwiki.biligame.com/images/cq/7/78/9r81wjxaemj87c060fh7il2pt5wdu0t.png",
        Link : "https://wiki.biligame.com/cq/%E6%B5%B7%E4%B9%8B%E9%AA%84%E5%AD%90%E7%8E%9B%E8%95%BE",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["鲸鱼","鱼剑"]
    },
    {
        Name : "爆丸",
        Img : "https://patchwiki.biligame.com/images/cq/2/29/kpo5tx0xxpuvmsmu9ym96z20df1pmyv.png",
        Link : "https://wiki.biligame.com/cq/%E7%88%86%E4%B8%B8",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["老鼠"]
    },
    {
        Name : "拉诺",
        Img : "https://patchwiki.biligame.com/images/cq/c/c7/ffssee9k7jvpq1ewe3q4g69vauwepr9.png",
        Link : "https://wiki.biligame.com/cq/%E4%B8%8A%E5%8F%A4%E5%8E%9F%E5%A7%8B_%E6%8B%89%E8%AF%BA",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 少数民族联合,
        昵称 : ["恐龙","恐龙妹"]
    },
    {
        Name : "拉芙塔莉雅",
        Img : "https://patchwiki.biligame.com/images/cq/3/34/t2v96d1voik2xxg86paj69xl2aczcve.png",
        Link : "https://wiki.biligame.com/cq/%E6%8B%89%E8%8A%99%E5%A1%94%E8%8E%89%E9%9B%85",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["小浣熊","干脆面"]
    },
    {
        Name : "枪使",
        Img : "https://patchwiki.biligame.com/images/cq/a/a5/tdkebmpmucc8qqvfjhzwgasjb7v2551.png",
        Link : "https://wiki.biligame.com/cq/%E6%9E%AA%E4%BD%BF",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["枪哥"]
    },
    {
        Name : "哥布林杀手",
        Img : "https://patchwiki.biligame.com/images/cq/4/4e/isa3jci5wns9x2zcwukvc8cdg65v3x5.png",
        Link : "https://wiki.biligame.com/cq/%E5%93%A5%E5%B8%83%E6%9E%97%E6%9D%80%E6%89%8B",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["哥杀"]
    },
    {
        Name : "库珥修·卡尔斯腾",
        Img : "https://patchwiki.biligame.com/images/cq/7/7c/0cv6x9yi3ygl38cgkvc2vx08k655w9c.png",
        Link : "https://wiki.biligame.com/cq/%E5%BA%93%E7%8F%A5%E4%BF%AE%C2%B7%E5%8D%A1%E5%B0%94%E6%96%AF%E8%85%BE",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["库珥修"]
    },
    {
        Name : "蕾德那斯",
        Img : "https://patchwiki.biligame.com/images/cq/4/43/klzauphd755az9vyft26wrte87t3e5q.png",
        Link : "https://wiki.biligame.com/cq/%E8%95%BE%E5%BE%B7%E9%82%A3%E6%96%AF",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 格兰西亚帝国,
        昵称 : ["团长"]
    },
    {
        Name : "梅喧",
        Img : "https://patchwiki.biligame.com/images/cq/0/01/fea86pr7ifgijyv4eocxmvy2auw3nz0.png",
        Link : "https://wiki.biligame.com/cq/%E6%A2%85%E5%96%A7",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : []
    },
    {
        Name : "特薇儿莉",
        Img : "https://patchwiki.biligame.com/images/cq/4/4c/nzuliw8vykskjpdtuwb1n6mackn7a54.png",
        Link : "https://wiki.biligame.com/cq/%E5%86%B3%E6%88%98%E7%9A%84%E7%89%B9%E8%96%87%E5%84%BF%E8%8E%89",
        卷型 : 紫卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["春剑","推车","推土机"]
    },
    {
        Name : "达娜·伊克露西亚",
        Img : "https://patchwiki.biligame.com/images/cq/8/89/gxqruq3fls2g6fonmpmgb322lbbsykr.png",
        Link : "https://wiki.biligame.com/cq/%E8%BE%BE%E5%A8%9C%C2%B7%E4%BC%8A%E5%85%8B%E9%9C%B2%E8%A5%BF%E4%BA%9A",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["蓝毛"]
    },
    {
        Name : "拉克夏·冯·罗斯威尔",
        Img : "https://patchwiki.biligame.com/images/cq/9/95/9nuo09jbiajsttjvq9o5rba1mbpx2x8.png",
        Link : "https://wiki.biligame.com/cq/%E6%8B%89%E5%85%8B%E5%A4%8F%C2%B7%E5%86%AF%C2%B7%E7%BD%97%E6%96%AF%E5%A8%81%E5%B0%94",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["橙毛","大小姐"]
    },
    {
        Name : "亚特鲁·克里斯汀",
        Img : "https://patchwiki.biligame.com/images/cq/1/1e/p4rrs86pmzyp5p930msf6mqea9d972f.png",
        Link : "https://wiki.biligame.com/cq/%E4%BA%9A%E7%89%B9%E9%B2%81%C2%B7%E5%85%8B%E9%87%8C%E6%96%AF%E6%B1%80",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["红毛","红发色魔"]
    },
    {
        Name : "布蕾克·贝拉多娜",
        Img : "https://patchwiki.biligame.com/images/cq/f/fe/4nli3f7lhvs6mzld9jj8yfpkbrjkyjt.png",
        Link : "https://wiki.biligame.com/cq/%E5%B8%83%E8%95%BE%E5%85%8B%C2%B7%E8%B4%9D%E6%8B%89%E5%A4%9A%E5%A8%9C",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["小黑猫","小黑"]
    },
    {
        Name : "魏丝·雪倪",
        Img : "https://patchwiki.biligame.com/images/cq/7/74/4hmmeocisojm77dzep8f8ys83xzf42p.png",
        Link : "https://wiki.biligame.com/cq/%E9%AD%8F%E4%B8%9D%C2%B7%E9%9B%AA%E5%80%AA",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["白"]
    },
    {
        Name : "克里斯",
        Img : "https://patchwiki.biligame.com/images/cq/2/2b/9f56qyzonxxazgz8a6nu9wmhj6vgv76.png",
        Link : "https://wiki.biligame.com/cq/%E7%82%8E%E4%B9%8B%E5%AE%BF%E5%91%BD%E5%85%8B%E9%87%8C%E6%96%AF",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : []
    },
    {
        Name : "欧米茄·卢卡尔",
        Img : "https://patchwiki.biligame.com/images/cq/5/55/7hblt90u8bpliynatc4fjx4wvqwezfr.png",
        Link : "https://wiki.biligame.com/cq/%E6%AC%A7%E7%B1%B3%E8%8C%84%C2%B7%E5%8D%A2%E5%8D%A1%E5%B0%94",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["社长"]
    },
    {
        Name : "八神庵",
        Img : "https://patchwiki.biligame.com/images/cq/d/da/bncit3cpkg0foyjceq708uv8fg1xnp6.png",
        Link : "https://wiki.biligame.com/cq/%E5%85%AB%E7%A5%9E%E5%BA%B5",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["八神"]
    },
    {
        Name : "草薙京",
        Img : "https://patchwiki.biligame.com/images/cq/2/25/my1apodqnopizhyczkmgydmgcyuo3qp.png",
        Link : "https://wiki.biligame.com/cq/%E8%8D%89%E8%96%99%E4%BA%AC",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : []
    },
    {
        Name : "米莉亚·蕾姬",
        Img : "https://patchwiki.biligame.com/images/cq/1/1f/700diq5v3eycmegxb3m90vt84kftvol.png",
        Link : "https://wiki.biligame.com/cq/%E7%B1%B3%E8%8E%89%E4%BA%9A%C2%B7%E8%95%BE%E5%A7%AC",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["头发"]
    },
    {
        Name : "乔尼",
        Img : "https://patchwiki.biligame.com/images/cq/9/94/00mp8fjmolq0lfr1uyrkcy4r10u0hsu.png",
        Link : "https://wiki.biligame.com/cq/%E4%B9%94%E5%B0%BC",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["丁丁"]
    },
    {
        Name : "凯·奇斯库",
        Img : "https://patchwiki.biligame.com/images/cq/9/9f/d3i9wpo3k3hxer5q4gcfbmdcc75mjul.png",
        Link : "https://wiki.biligame.com/cq/%E5%87%AF%C2%B7%E5%A5%87%E6%96%AF%E5%BA%93",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["雷剑"]
    },
    {
        Name : "索尔·巴德凯",
        Img : "https://patchwiki.biligame.com/images/cq/6/6f/g8k922lcx06n3imtvpuqxofyepd0ua3.png",
        Link : "https://wiki.biligame.com/cq/%E7%B4%A2%E5%B0%94%C2%B7%E5%B7%B4%E5%BE%B7%E5%87%AF",
        卷型 : 黑卷,
        职业 : 剑,
        势力 : 支援所有势力,
        昵称 : ["炎剑","火剑"]
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
    [少数民族联合, 'https://patchwiki.biligame.com/images/cq/thumb/1/11/brbxrn1h2xpd69n21uoeafmc31xw6oi.png/22px-%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E8%81%94%E5%90%88_icon.png'],
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
    [少数民族联合, "少数民族联合"],
    [东部王国_陈, "东部王国_陈"],
    [支援所有势力, "支援所有势力"]
]);