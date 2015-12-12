var programList = [];

function programs() {
    var req = new XMLHttpRequest();

    req.open('GET', '/tips');

    req.addEventListener("load", handleRes)

    req.send();
    return false;
}


function handleRes() {
    if (this.readyState !== XMLHttpRequest.DONE)
        return;

    if (this.status === 200) {
        sendPosts(this);
    }
        
}


function sendPosts(req) {
    var requestResponse = req.responseText;
    var json = JSON.parse(requestResponse);
    tipList = json;
    var str = "";

    json.forEach(function (p, i) {
        str += programs(p);
    })

    document.getElementById("Showoff").innerHTML = str;

}

