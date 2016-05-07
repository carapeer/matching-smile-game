var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var this_img;
var left_position;
var top_position;
var leftSideImages;
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var i;
                
function generateFaces() {
    for (i = 0; i < numberOfFaces; i++) {
        this_img = document.createElement("img");
        this_img.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        left_position = Math.floor(Math.random() * 400);
        top_position = Math.floor(Math.random() * 400);
        this_img.style.left = left_position + "px";
        this_img.style.top = top_position + "px";
        theLeftSide.appendChild(this_img);
        leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
        theLeftSide.lastChild.onclick = function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            generateFaces();
        };
        theBody.onclick = function gameOver() {
            alert("Game Over! Please try again!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
        };
    }
}