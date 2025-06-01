const cards = document.querySelectorAll(".cards"); 
const lists = document.querySelectorAll(".list"); 

for(const card of cards) {
    card.addEventListener("dragstart",dragStart);
    card.addEventListener("dragend", dragEnd); 
}

for(const list of lists) {
    list.addEventListener("dragover")
    list.addEventListener("dragenter")
    list.addEventListener("dragleave")
    list.addEventListener("drop")
} 