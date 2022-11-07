let cards = document.getElementsByClassName("card");
let activeIndex = 0;

function goRight() {
    let neighbours = getNeighbours();

    cards[neighbours[0]].className = "card inactive";

    activeIndex = neighbours[1];

    neighbours = getNeighbours();
    cards[neighbours[0]].className = "card left"
    cards[activeIndex].className = "card active"
    cards[neighbours[1]].className = "card right"
}

function goLeft() {
    let neighbours = getNeighbours();

    cards[neighbours[1]].className = "card inactive";

    activeIndex = neighbours[0];

    neighbours = getNeighbours();
    cards[neighbours[0]].className = "card left"
    cards[activeIndex].className = "card active"
    cards[neighbours[1]].className = "card right"
}

function getNeighbours()  {
    let length = cards.length;
    let left = activeIndex - 1 < 0 ? length -1 : activeIndex - 1;
    let right = activeIndex + 1 > length - 1 ? 0 : activeIndex + 1;
    return [left, right];
}