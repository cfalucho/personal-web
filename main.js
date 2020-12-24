// function to scroll smoothly to ID
function jumpTo () {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"})

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
var skillsArray = ["HTML", "CSS", "Bootstrap", "GitHub", "MySQL", "Git", "Browser Testing", "MongoDB", "Responsive Design", "JavaScript", ".NET"]

changeText(skillsArray, 0);
