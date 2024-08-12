const container = document.querySelector('.container');

let col = "";
let row = "";

let rowDiv;
let colDiv;

let div; 
let boxList;
let dimensionButton = document.querySelector(".dimension");
let dimension_popup = document.querySelector(".dimension-popup");
const popup_input = document.querySelector(".popup-input");
let userInput;
let boxSize;
dimensionButton.addEventListener("click", ()=>{
    dimension_popup.classList.toggle('hidden');
})

let redVal;
let greenVal;
let blueVal;
let rgb;
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

let dimension;

popup_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        userInput = popup_input.value;
        if(1<= userInput && userInput <= 100){
            dimension = userInput;
            //return userInput;
        }
        else{
        dimension = 16;
        //return 16;
        }
        popup_input.value = "";
        dimension_popup.classList.toggle('hidden');
        clearContainer();
        changeBox(dimension);
    }
});
function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}
function changeBox(dimension){
    for(i=0; i<dimension;i++){
        row = "row-"+ i.toString();
        rowDiv = document.createElement('div');
        container.appendChild(rowDiv);
        boxSize = 100 *1.0 /dimension;
        console.log(boxSize, dimension);
        rowDiv.setAttribute('class', row);
        rowDiv.setAttribute('style', "height: "+ boxSize + "%; display:flex; box-sizing: border-box;");
        // 
        for(j=0; j<dimension; j++){

            colDiv = document.createElement('div');
            rowDiv.appendChild(colDiv);
            colDiv.setAttribute('class', 'col');
            colDiv.setAttribute('style', "width: "+ boxSize + "%; border: .1px solid black; display:flex; box-sizing: border-box; z-index: 10;");
        
        }
    

    }
    boxList = document.querySelectorAll('.col');
    for(const box of boxList){
        box.addEventListener("mouseenter", () => {
            redVal = Math.ceil(Math.random(randomBetween(0, 255)) *255);
            blueVal =Math.ceil(Math.random(randomBetween(0, 255)) *255);
            greenVal = Math.ceil(Math.random(randomBetween(0, 255)) *255);
            rgb = 'rgb(' + redVal + ', ' + greenVal + ', ' + blueVal + ')';
            box.setAttribute('style', "width: "+ boxSize + "%; border: .5px solid black; display:flex; box-sizing: border-box; background-color:" + rgb + ";");
            //box.classList.add("hover");
        
        })
        }
}
changeBox(16);

