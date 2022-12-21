let hambergBtn = document.querySelector(".hambergBtn"); //버거 버튼
let items = document.querySelector(".items"); //메뉴 리스트
let link = document.querySelector(".link");

hambergBtn.addEventListener("click", clickFn);

function clickFn()
{
    console.log("햄버거 버튼 눌림");

    items.classList.toggle('active');
    //link.classList.toggle('active');
}