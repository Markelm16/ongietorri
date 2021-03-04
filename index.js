
var textBar = document.getElementById('textBar');
textBar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (textBar.value === ':)') {
            document.getElementById('ongi').innerHTML = 'ongi etorri ;)'
            return;
        }
        executeRoute(textBar.value);
    }
});

textBar.addEventListener("keydown", function(event) {
    if (event.keyCode === 9) {
        event.preventDefault();
        if (!(textBar.value.slice(-1) === ';')) {
        textBar.value = textBar.value + ';'
    }
    }
})

function analyzeText() {
    textBar.value = "dick and shit"; 
}