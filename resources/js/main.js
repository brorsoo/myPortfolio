'use strict';

// 메인 텍스트 타이핑
const content = "Back-End Developer\n김형수의 포트폴리오입니다.";
const text = document.querySelector(".page-title");
let i = 0;

function typing(){
    
    if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt === "\n" ? "<br/>": txt;
        i++;
    }

}
setInterval(typing, 200);
