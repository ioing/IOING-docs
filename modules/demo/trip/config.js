export default {
    resources : {
        script: {
        },
        source: {
            index: "index.html"
        },
        style: {
            main: "main.css"
        },
        data: {
            list: "list.json",
            // list: hostServer + "api/getHwyFirstPage.do?callback=~|@param(page:page,limit:limit)|@cache(360)",
            lang: {},
            info: {},
            config: {
                // 此处可进行降级，暂不需要降级处理
                infinite: device.os.android ? true : true
            }
        }
    },
    config : {
        level : 3,
        style : ["main"],
        script : [],
        source: ["index"],
        data : ["list", "lang", "info", "config"],
        cache : 120,
        sandbox : true,
        animation : true
    },
    filter : function (data) {
    },
    param : {
        limit: 50,
        page: 1
    }
}