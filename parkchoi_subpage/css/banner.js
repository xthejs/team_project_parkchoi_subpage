const content = "이제 아케이드 GAMES 세상으로 모험을 떠날 시간입니다! 파티원과 함께 게임 실력을 발휘하여 게임을 클리어하세요! 재치있고 빠른 반사 신경으로 즐거운 퍼즐을 풀 수 있습니다. ♨뜨거운 반응에 속도UP! 다양한 스테이지를 클리어하세요!"
const text = document.querySelector(".text1")
let index = 0;

function sleep(delay){ 
    const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = "";
        index = 0;
        sleep(1000);
    }
}
setInterval(typing, 100)