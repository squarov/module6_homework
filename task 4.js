const num = function(a, b) {
    for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
const intervalId = setInterval(num, 5000, 5, 15)

const timeoutId = setTimeout(function() {
    clearInterval(intervalId)
}, 5000)