const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const monitor = $(".monitor")
const a = $(".a");
const b = $(".b");
const op = $(".op");
const c = $(".c");
const True = $(".true");
const False = $(".false");
const Button = $(".button");
const Score = $(".score");
var d, temp, op2, equal, random, score = 0;
var Random = function() {
    a.innerText = Math.floor(Math.random() * 10);
    b.innerText = Math.floor(Math.random() * 10);
    d = Math.floor(Math.random() * 2);
    op2 = Math.floor(Math.random() * 2);
    if (op2 == 0) {
        op.innerText = "-"
    } else {
        op.innerText = "+"
    }

    if (d == 1) {
        temp = eval(a.innerText + op.innerText + b.innerText)
    } else {
        temp = eval(a.innerText + op.innerText + b.innerText) + Math.floor(Math.random() * 2);
    }
    c.innerText = temp
    equal = eval(a.innerText + op.innerText + b.innerText)
    if (equal == temp) {
        random = 1
    } else {
        random = 0
    }
    Button.onclick = function(e) {
        if (e.target.id == random) {
            score += 1;
            Score.innerText = score
        } else {
            // score = 100;
            clearInterval(myInterval)
            monitor.innerHTML = `<span>Rất tiếc bạn đã trả lời sai</span>
            <b></b>
            <h3>Điểm bạn đạt được là: ${score}</h3>
                           
            `
            score = 100
        }
    }

}
const myInterval = setInterval(Random, 4000)