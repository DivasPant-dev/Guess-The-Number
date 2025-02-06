const randomNumber = Math.floor(Math.random() * 49 + 1);

function getValue() {
    var getTag = document.getElementById("input");
    var value = parseInt(getTag.value, 10);

    if (randomNumber === value) {
        document.querySelector(".price").innerHTML = "YOU WON! 10 MILLION fake money";
        document.querySelector(".price").style.color = "darkgreen";
    } else {
        document.querySelector(".price").innerHTML = "You Lost, Number was " + randomNumber;
        document.querySelector(".price").style.color = "red";
    }
}

document.getElementById("refresh").addEventListener("click", function() {
    window.location.reload();
});