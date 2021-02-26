//https://github.com/XXGGG
module.exports = {
  "title": "Technology blog of WH",
  "description": "今天。没有blog了哟",
  "dest": "public",
  "locales": {
    '/': {
      "lang": 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
        "meta",
        {
          "name":"description",
          "content":"基于vuepress的技术博客，内容主要关于前端及一些技术前沿知识"
        }
    ],

    [
      "meta",
      {
        "name":"keywords",
        "content":"vue,vuepress,frontend,前端,JavaScript,HTML,CSS"
      }
    ],
    [
        "script",
        {
          "language":"javascript",
          "type":"text/javascript",
          "src":"https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  "theme": "reco",
  "themeConfig": {
    'noFoundPageByTencent': false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "FrontEnd",
        "icon": "reco-blog",
        "link": "/docs/FrontEnd/"
      },
      {
        "text": "心情随笔",
        "icon": "reco-other",
        "link": "/docs/BathDuck/"
      },
      // {
      //   "text": "Project",
      //   "icon": "reco-api",
      //   "items": [
      //     {"text": "vue",  "items": [{ "text": "vue-elementUi电商后台", "link": "/docs/project/"}]},
      //     {"text": "基础",
      //      "items": [
      //         { "text": "💠 Veronica", "link": "https://xxggg.gitee.io/Veronica/","target":'_blank'},
      //         { "text": "💠 vue2-demo", "link": "https://xxggg.gitee.io/vue2-demo/","target":'_blank'}
      //      ]
      //     }
      //   ]
      // },
      {
        "text": "Timeline",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Toolset",
        "icon": "reco-eye",
        "items": [
          {
            "text": "PDF编辑器",
            "link": "https://smallpdf.com/cn/pdf-to-word",

          },
          {
            "text": "json编辑器",
            "link": "https://www.bejson.com/jsoneditoronline"
          },
          {
            "text": "代码格式化",
            "link": "https://tool.oschina.net/codeformat/html",
          },
          {
            "text": "编码转换",
            "link": "http://tool.chinaz.com/tools/native_ascii.aspx",
          },
          {
            "text": "图片压缩",
            "link": "https://tinypng.com",
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/wuhaozuishuai",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_43457564",
            "icon": "reco-csdn"
          },
        ]
      }
    ],
    "sidebar": {
      "/docs/FrontEnd/": [
          //当页目录连接、将在页面左部加载出每个md文件的标题
          "",//当前readme
          "JS中的this指向",
          // "recode",
      ],
      "/docs/BathDuck/": [
          "",
      ],
      // "/docs/project/": [
      //   "",
      //   "Veronica",
      //   "Demo"
      // ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 5,
        "text": "分类"
      },
      "tag": {
        "location": 6,
        "text": "标签"
      }
    },
    "logo": "/meLogo.jpg",
    "search": true,
    "searchMaxSuggestions": 100,
    "lastUpdated": "最后更新",
    "author": "伍浩",
    "authorAvatar": "/meme.gif",
    // "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  //插件
  "plugins":[
    // 流程图插件
    ['flowchart'],
    // 标签加强
    ["vuepress-plugin-boxx" ],
    // 动态标题
    ["dynamic-title",
      {
        showIcon: "/bitbug_faviconIn.ico",
        showText: "(/≧▽≦/)欢迎帅哥美女！",
        hideIcon: "/bitbug_faviconEnd.ico",
        hideText: "(●—●)呜呜，不要走嘛！！",
        recoverTime: 2000
      }],
    // 更新刷新插件
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.5, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
        "@vuepress-reco/vuepress-plugin-pagation",
        {
            "total":10,
            "perPage":5,
            "currentPage":1,
        }
    ],
     [
         "vuepress-plugin-comment",
          {
            choosen:'valine',
            options: {
              el: '#valine-vuepress-comment',
              appId: 'pb0BqCJ22G2mQ1rSjMaDcWGt-gzGzoHsz',// your appId
              appKey: '2yfKs36QDsF2NDc1aLyjDhci', // your appKey
              visitor:true,
            }
          }
     ]
  ]
}
