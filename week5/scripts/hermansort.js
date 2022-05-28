let curDate= new Date()
let curWeekday = curDate.getDay()
let message = ""
if (curWeekday < 1) {
    message = "Woohoo!  It is the weekend!"
}
else if (curWeekday > 5) {
    message = "Woohoo!  It is the weekend!"
}
else {
    message = "Hang in there!"
}

let message2 =""
switch (curWeekday) {
    case 0:
        message2 = "Sunday"
        break;
    case 1:
        message2 = "Monday"
        break;
    case 2:
        message2 = "Tuesday"
        break;
    case 3:
        message2 = "Wednesday"
        break;
    case 4:
        message2 = "Thurday"
        break;
    case 5:
        message2 = "Friday"
        break;
    case 6:
        message2 = "Saturday"
        break;
    default:
        message2 = 'Error: Unknown Day - ' + dayOfWeek;
        break;
}

document.getElementById("message1").innerText=message
document.getElementById("message2").innerText=message2

let templeList= []

function output (templeList) {
    templeList.forEach(temple => {
        var article = document.createElement("article");
        var templeName = document.createElement("h3");
        templeName.appendChild(document.createTextNode(temple.templeName));
        var templeLoc = document.createElement("h4");
        templeLoc.appendChild(document.createTextNode(temple.location));
        var templeDedi = document.createElement("h4");
        templeDedi.appendChild(document.createTextNode(temple.dedicated));
        var templeImg = document.createElement("img");
        templeImg.setAttribute("src", temple.imageUrl)
        templeImg.setAttribute("alt", temple.templeName)
        article.appendChild(templeName)
        article.appendChild(templeLoc)
        article.appendChild(templeDedi)
        article.appendChild(templeImg)
        document.getElementById("temples").appendChild(article)
    });
}

async function getTemples(sortMethod) {
    response = await
fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    if (response.ok) {
        const data = await response.json()
        if (sortMethod == "asc"){
            data.sort()
            output(data)
        }
        else if (sortMethod == "desc"){
            data.sort().reverse()
            output(data)
        }
    }
}

function reset() {
    let articleList = document.getElementById("temples").getElementsByTagName("article")
    while(articleList.length > 0) {
        articleList[0].remove();
     }
}

function sortBy(){
    reset()
    sortMethod = document.getElementById("sortBy").value
    getTemples(sortMethod)
}

sortBy()
document.getElementById("sortBy").addEventListener("change", sortBy)