var programList = [{
    ImagePath: "",
    DwldFile: "",
    Instructions: ""
},
{
    ImagePath: "",
    DwldFile: "",
    Instructions: ""
}];

var searchQuery = "";

function programs() {
    var req = new XMLHttpRequest();

    req.open('GET', '/programs');

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
    var str = "";

    for (i = 0; i < json.length; i++) {
        if (json[i].indexOf(searchQuery) > -1) {
            str += programs(programList[i])
        }
    }

    document.getElementById("Showoff").innerHTML = str;

}

