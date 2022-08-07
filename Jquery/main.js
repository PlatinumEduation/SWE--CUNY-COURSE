const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let count = 0;
$(document).ready(function() { 


    $(".test").on("mouseleave", function(e){
        count++;
        let hexColor = '#';
        for(let i=0; i<6;i++)
        {
            hexColor = hexColor + hex[getRandomNumber()];
        }
        $(".test p").text(`The mouse leaves the circle ${count} times`);
        $(".test").css("background-color",hexColor);
    });


    $(".tests").on("click", function(e){
        count++;
        let hexColor = '#';
        for(let i=0; i<6;i++)
        {
            hexColor = hexColor + hex[getRandomNumber()];
        }
        $(".tests p").text(`The squared was clicked ${count} times`);
        $(".tests").css("background-color",hexColor);
    });

})



function getRandomNumber()
{
    return Math.floor(Math.random()*hex.length);
}