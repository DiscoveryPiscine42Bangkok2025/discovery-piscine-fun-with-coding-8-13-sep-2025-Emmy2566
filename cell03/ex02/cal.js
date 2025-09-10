window.setInterval(function (){alert("Please, use me...")},30000)
function cal() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let c = document.getElementById("oper").value
    let ans = eval(`${a}${c}${b}`)
    if (ans < 0) {
        alert("Error :(")
        return;
    } else if (ans == Infinity || isNaN(ans)) {
        alert("It’s over 9000")
        return;
    }
    console.log(ans)
    alert(ans)
}