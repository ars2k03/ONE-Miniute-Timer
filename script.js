let x = document.getElementById("circle");

for (let i = 1; i <= 60; i++) {
    setTimeout(function(){
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);
        x.innerHTML = `<h1>${i}</h1>`;
        x.style.backgroundColor = `rgb(${a},${b},${c})`;
    }, i*1000)
}

setTimeout(function(){
    x.style.backgroundColor = `red`;
    x.innerHTML = `<h1>END</h1>`;
}, 61*1000);
