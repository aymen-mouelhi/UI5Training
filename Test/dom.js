/**
 * Created by I060307 on 17/03/14.
 */
function createDOM(){
    document.getElementById("div").appendChild(createElement("1", "Some dynamically created text", "span"));
    document.getElementById("div").appendChild(createElement("2", "sap", "p"));
}

function createElement(id, text, type){
    var element;
    switch (type){
        case "p":
            element = document.createElement("p");
            element.textContent = text;
            element.setAttribute("id", "p1");
            break;
        case "span":
            element = document.createElement("span");
            element.textContent = text;
            element.setAttribute("id", "p1");
    }
    return element;
}