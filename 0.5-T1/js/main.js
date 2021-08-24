// COPY WALLET ADRESS ON CLICK

function copy(that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy', false);
    inp.remove();

    document.getElementById("custom-tooltip").style.display = "flex";

    setTimeout(function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1300);
}

jQuery(document).ready(function() {
    $(".copiable-ul").click(function(e) {

        var myX = e.pageX - 30;
        var myY = e.pageY - 35;
        $("#custom-tooltip").offset({
            left: myX,
            top: myY
        });
    })
})










// onclick="window.open('https://support.wwf.org.uk/earth_hour/index.php?type=individual','_blank');"