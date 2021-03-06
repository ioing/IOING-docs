export default {
    resources : {
        script : {
        },
        source : {
            index: "index.html"
        },
        style : {
        },
        data : { 
            discover: [
                "demo/photo-tilt",
                "demo/alert-dialog",
                "demo/switch-slider",
                "demo/banner-slider",
                "demo/code-highlight"
            ],
            colorful: ["#00bc9c", "#1aaf5e", "#2e97df", "#e97e06", "#ea4b36", "#33495f"],
            testscrolllist: function (param, callback) {
                var r = [{i:0},{i:1},{i:2},{i:3},{i:4},{i:5},{i:0},{i:1},{i:2},{i:3},{i:4},{i:5}]

                if ( param.turnover >= 4 ) {
                    return []
                }

                if ( !param.start ) {
                    return r
                } else {
                    setTimeout(function () {
                        callback(r)
                    }, 600)
                }
            }
        }
    },
    config : {
        level : 0,
        absolute : false,
        style : ["common", "docs"],
        script : [],
        source: ["index", "footer"],
        data: ["discover", "colorful", "testscrolllist"],
        sandbox : true,
        cache : 360,
        timeout : 60,
        animation : false
    }
}