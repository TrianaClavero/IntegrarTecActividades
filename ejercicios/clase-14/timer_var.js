/* for (var i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
} */

//// timer corregido 

for (var i = 1; i <= 10; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    })(i);
}
