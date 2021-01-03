// function to scroll smoothly to ID
function jumpTo () {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"})

}

// scroll to the top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


// function to change skills text every second
function changeText (skillsArray, i) {
  setInterval(
    function(){
        document.getElementById("skills-array").innerHTML = skillsArray[i];
        i++;
        i %= skillsArray.length;
        },
        600
  ); 
}


// store skills in an array
var skillsArray = ["HTML", "CSS", "effective communication", "Bootstrap", "GitHub", "MySQL", "Git", "debugging", "MongoDB", 
                   "responsive design","collaboration", "JavaScript", ".NET", "analytics"]

changeText(skillsArray, 0);

// type speed for name title

let i = 0 ; 
let nameTitle = "ChristianDior Falucho"
let speed = 4;


window.onload = function (){
  typeName();
}


function typeName() {
  if(i < nameTitle.length){
    document.getElementById('nameTitle').innerHTML += nameTitle.charAt(i)
      i++;
      setTimeout(typeName, speed)
  }
}






