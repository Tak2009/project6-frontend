const styleType = document.querySelector("#style-type")
const scriptType = document.querySelector("#script-type")
const layout = document.querySelector("#layout")
const layoutType = document.querySelector("#layout-type")
let layoutBtn = document.querySelector("#type1")


// const renderBtns = () => {
//     layoutBtn.addEventListener("click", (e)=> {
//         changeLayout(layoutBtn)
//     })
// };

const addEventToLayoutBtn = (btn) => {
    btn.addEventListener("click", (e)=> {
                changeLayout(btn)
            })
}
   
const changeLayout = (btn) => {
    if (btn.id === "type1") {
        styleType.href = "./stylesheets/style2.css"
        layoutType.innerHTML = `<div class="row">
                                 <div class="col-md-6 bg-left">
                                  <h1 class="bg-title">BgSwitcher Test</h1>
                                  <button id="type2" ="col-md-6">Change layout</button>
                                 </div>
                                 <div class="bg-switcher col-md-6">
                                 </div>
                                </div>`
        scriptType.innerHTML = `jQuery(function($) {
                                $('.bg-switcher').bgSwitcher({
                                images: ['https://kishiken.com/common/jq_sample/BgSwitcher/sample1.jpg','https://kishiken.com/common/jq_sample/BgSwitcher/sample2.jpg','https://kishiken.com/common/jq_sample/BgSwitcher/sample3.jpg',"./src/img/test1.jpg","./src/img/test2.jpg"], // 切り替え画像
                                Interval: 5000, //切り替えの間隔 1000=1秒
                                start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始する
                                loop: true, //切り替えをループする
                                shuffle: false, //背景画像の順番をシャッフルする
                                effect: "fade", //エフェクトの種類 "fade" "blind" "clip" "slide" "drop" "hide"
                                duration: 1000, //エフェクトの時間 1000=1秒
                                easing: "swing", //エフェクトのイージング "swing" "linear"
                                   });
                                });`
        // debugger
        let btn = document.querySelector("#type2")
        addEventToLayoutBtn(btn)
    } else {
        styleType.href = "./stylesheets/style1.css"
        layoutType.innerHTML = `<div id="layout-type" class="bg-switcher">
                                 <h1 class="bg-title">BgSwitcher テスト</h1>
                                 <button id="type1">Change layout</button>
                                </div>`
        scriptType.innerHTML = `jQuery(function($) {
                                $('.bg-switcher').bgSwitcher({
                                images: ['https://kishiken.com/common/jq_sample/BgSwitcher/sample1.jpg','https://kishiken.com/common/jq_sample/BgSwitcher/sample2.jpg','https://kishiken.com/common/jq_sample/BgSwitcher/sample3.jpg',"./src/img/test1.jpg","./src/img/test2.jpg"], // 切り替え画像
                                Interval: 5000, //切り替えの間隔 1000=1秒
                                start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始する
                                loop: true, //切り替えをループする
                                shuffle: false, //背景画像の順番をシャッフルする
                                effect: "fade", //エフェクトの種類 "fade" "blind" "clip" "slide" "drop" "hide"
                                duration: 1000, //エフェクトの時間 1000=1秒
                                easing: "swing", //エフェクトのイージング "swing" "linear"
                                   });
                                });`

        let btn = document.querySelector("#type1")
        addEventToLayoutBtn(btn)
    }
    
}

addEventToLayoutBtn(layoutBtn)