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


$(function() {

    // 마우스오버 스케일
    $(".mouseScale1").mouseover(function () {
        $(".mouseScale1").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale1").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale2").mouseover(function () {
        $(".mouseScale2").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale2").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale3").mouseover(function () {
        $(".mouseScale3").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale3").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale4").mouseover(function () {
        $(".mouseScale4").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale4").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale5").mouseover(function () {
        $(".mouseScale5").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale5").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale6").mouseover(function () {
        $(".mouseScale6").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale6").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale7").mouseover(function () {
        $(".mouseScale7").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale7").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale8").mouseover(function () {
        $(".mouseScale8").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale8").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale9").mouseover(function () {
        $(".mouseScale9").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale9").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });
    $(".mouseScale10").mouseover(function () {
        $(".mouseScale10").css({ "transform" : "scale(1.05)", "zIndex" : "1", "transition" : "all 0.5s" });
    }).mouseout(function () {
        $(".mouseScale10").css({ "transform" : "scale(1)", "zIndex" : "0", "transition" : "all 0.5s" });
    });



});


