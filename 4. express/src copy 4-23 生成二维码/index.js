require('./routes/init');

const QRCode = require('qrcode');

QRCode.toDataURL('hello ', (err, url) => {
    console.log(err, url);
});

QRCode.toDataURL('hello ', (err, url) => {
    console.log(err, url);
});


const path = require('path');
const filePath = path.resolve(__dirname, "./code.png");
QRCode.toFile(filePath, 'hello ', {
    color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
    }
}, (err, url) => {
    console.log(err, url);
});

(function () {
    const keys = [];
    const iframe = document.createElement('iframe');
    iframe.onload = function () {
        const iframeKeys = Object.keys(iframe.contentWindow);
        Object.keys(window).forEach(function (key) {
            if (!(iframeKeys.includes(key))) {
                keys.push(key)
            }
        });
        console.log(keys);
    };
    iframe.src='about:blank';
    document.body.appendChild(iframe)
})();

/**
 * 
 * 0: "0"
1: "GetParams"
2: "__REDUX_DEVTOOLS_EXTENSION__"
3: "devToolsExtension"
4: "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
5: "$"
6: "jQuery"
7: "core"
8: "__core-js_shared__"
9: "global"
10: "System"
11: "asap"
12: "Observable"
13: "setImmediate"
14: "clearImmediate"
15: "regeneratorRuntime"
16: "_babelPolyfill"
17: "polyvPptPlayer"
18: "s2j_onVideoPlay"
19: "s2j_onVideoPause"
20: "s2j_onPlayOver"
21: "s2j_onPlayerInitOver"
22: "onbufferChange"
23: "switchScreen"
24: "s2j_onPptDataParam"
25: "s2j_onListDataComplete"
26: "s2j_ppt_play_seek"
27: "s2j_ppt_list_to_page"
28: "onFullScreenBtnCLick"
29: "close_player"
30: "close_list"
31: "unBind"
32: "bindDrag"
33: "checkFull"
34: "IEVersion"
35: "returnExports"
36: "CryptoJS"
37: "hexcase"
38: "b64pad"
39: "chrsz"
40: "hex_sha1"
41: "b64_sha1"
42: "str_sha1"
43: "hex_hmac_sha1"
44: "b64_hmac_sha1"
45: "str_hmac_sha1"
46: "sha1_vm_test"
47: "core_sha1"
48: "sha1_ft"
49: "sha1_kt"
50: "core_hmac_sha1"
51: "safe_add"
52: "rol"
53: "str2binb"
54: "binb2str"
55: "binb2hex"
56: "binb2b64"
57: "polyvVodBrowser"
58: "polyvVodConfig"
59: "polyvPolyFill"
60: "polyvVodTool"
61: "polyvObject"
62: "Spinner"
63: "aesjs"
64: "PovBase64"
65: "PolyvBanSeek"
66: "PolyvContinuePlay"
67: "PolyvFlash"
68: "PolyvDomainList"
69: "PlayNetWorkTips"
70: "PlayAdControl"
71: "PlayCoreControl"
72: "PlayEndControl"
73: "PlayHdControl"
74: "PlayLineControl"
75: "PlaySrtControl"
76: "PlayTeaserControl"
77: "PlayVideoControl"
78: "PlayQosMonitor"
79: "PlayFrameBridge"
80: "polyvObject_init"
81: "createPreviewPlayer"
82: "createShowPlayer"
83: "createPlayer"
84: "privateCreate"
85: "Base64"
86: "polyvPlayer"
87: "_global_server_data"
88: "webpackJsonp"
89: "jQuery11010006465383295640503"
90: "lay"
91: "introJs"
92: "WebUploader"
93: "NiceScroll"
94: "ccCoursewarePlayer"
95: "onCCH5PlayerLoaded"
96: "CCH5PlayerInnerApi"
97: "CCH5PlayerAdEnd"
98: "CCH5PlayerAdHeader"
99: "CCH5PlayerAdPaused"
[100 … 144]
100: "CCPlayerBarrage"
101: "CCH5PlayerTrack"
102: "oPlayer"
103: "cc_js_Player"
104: "createCCH5Player"
105: "getCCH5Player"
106: "CCH5PlayerCtrol"
107: "CCH5PlayerExercise"
108: "CCH5Knowledge"
109: "CCH5PlayerLoadingPic"
110: "CCH5PlayerLogo"
111: "CCH5PlayerMarquee"
112: "CCH5PlayerMore"
113: "CCH5PlayerMouseMenu"
114: "CCH5PlayerNetInfo"
115: "CCH5PlayList"
116: "CCH5PlayerAdPic"
117: "CCH5PlayerPwd"
118: "CCH5PlayerQA"
119: "CCH5PlayerRightMenu"
120: "CCH5PlayerShare"
121: "CCH5PlayerStatistic"
122: "CCH5PlayerVistor"
123: "CCH5PlayerVote"
124: "CCH5PlayerVr"
125: "__VUE_DEVTOOLS_TOAST__"
126: "ccTrack"
127: "onQuestionPopUp"
128: "onAnswerResult"
129: "s2j_onPlayStart"
130: "on_CCH5player_pause"
131: "on_CCH5player_play"
132: "on_CCH5player_ended"
133: "get_cc_verification_code"
134: "on_CCH5player_ready"
135: "on_player_qa_result"
136: "on_player_qa_review"
137: "sprintEventListeners"
138: "timer"
139: "__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__"
140: "__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__"
141: "__REACT_DEVTOOLS_COMPONENT_FILTERS__"
142: "__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__"
143: "__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__"
144: "__REACT_DEVTOOLS_BROWSER_THEME__"

 */
