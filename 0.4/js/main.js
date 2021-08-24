// COPY WALLET ADRESS ON CLICK

function copy(that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy', false);
    inp.remove();

    document.getElementById("custom-tooltip").style.display = "block";

    setTimeout(function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1300);
}



// onclick="window.open('https://support.wwf.org.uk/earth_hour/index.php?type=individual','_blank');"