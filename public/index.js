var programLists = [{
    DwldFile: "/files/word.txt",
    ImagePath: "/icons/word.png",
    Instructions: "https://support.office.com/en-us/article/Download-and-install-Office-using-Office-365-for-business-on-your-PC-72977511-dfd1-4d8b-856f-405cfb76839c"
},
{
    DwldFile: "/files/ppt.txt",
    ImagePath: "/icons/ppt.png",
    Instructions: "https://www.microsoft.com/en-us/download/details.aspx?id=6"
}];

var programmableLists = [];

programs();

document.getElementById("submit").addEventListener("click", programs);

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
    //programmableLists = json;
    var str = "";
    var counter = 2;

    json.forEach( function(p, i) {
      str = programTemplate(programLists[i]);
      if ((counter % 2) == 0) {
        document.getElementById("left").innerHTML += str;
      }
      else {
        document.getElementById("right").innerHTML += str;
      }
      counter++;
    });

  }
