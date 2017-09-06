export default {
    resources : {
        script : {
        },
        source : {
            index : "index.html"
        },
        style : {
            main : "main.css"
        },
        data: {
            city: "city.json",
            guider: "guide.json",
            guide: "guide.json",
            // city : hostServer + "api/getGoalHead.do?callback=~|@param(pageCode:{{cityid}})|@cache(360)",
            // guider : hostServer + "api/getGoalPage.do?callback=~&type=guide|@param(pageCode:{{cityid}},page:{{page}},limit:{{limit}})|@cache(360)",
            // guide : hostServer + "api/getGoalPage.do?callback=~&type=article|@param(pageCode:{{cityid}},page:{{page}},limit:{{limit}})|@cache(360)",
            lang: "lang/zh-CN.json"
        }
    },
    config : {
        level : 1,
        style : ["main"],
        script : [],
        source : ["index"],
        data : ["city", "guide", "guider", "lang"],
        cache : 120,
        sandbox : true,
        animation : true
    },
    param : {
        cityid : 12,
        limit : 100,
        page : 1
    },
    controller : {
    }
}