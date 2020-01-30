const btn = document.querySelector("#btn");
const scriptType = document.querySelector("＃script-type")

const renderBtns = () => {
    const btn1 = document.createElement("button")
    btn1.id = "type1"
    btn1.innerText = "Layout1"
    // btn1.addEventListener("click", (e)=> {
    //     changeLayout(btn)
    // })
    btn.appendChild(btn1)
};

// const changeLayout = (btn) => {
//     btn.className = "script-type1" ? 

// }


renderBtns()