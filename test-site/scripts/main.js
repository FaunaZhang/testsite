// 图片选择器
let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/test01.jpg'){
        myImg.setAttribute('src', 'images/test02.jpg');
    } else {
        myImg.setAttribute('src', 'images/test01.jpg');
    }
}

// 个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎你，' + myName + "！";
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎你，' + storedName + "！";
}

myButton.onclick = function() {
    setUserName();
}