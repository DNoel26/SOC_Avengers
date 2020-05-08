
import Direction_Selector from "../BusinessLogic/dirSelector.js";
import Main_UI from "../UILogic/MainUI.js";
import avengers_arr from "../BusinessLogic/arrAvenger.js";

function init()
{
    let index = 0;

    Main_UI.left_arrow_display.addEventListener("click",function(){

        Direction_Selector.left_arrow = true;
        Direction_Selector.right_arrow = false;

        console.log("Left Clicked!");
    });

    Main_UI.right_arrow_display.addEventListener("click",function(){

        Direction_Selector.left_arrow = false;
        Direction_Selector.right_arrow = true;

        console.log("Right Clicked!");
    });

    document.addEventListener("DOMContentLoaded",function(){

        console.log("DOM Loaded!");

        setInterval(function(){
            
            if(Direction_Selector.forward_direction == true)
            {
                index++;
            }

            else
            {
                index--;
            }

            Direction_Selector.user_direction_sel();
            
            if(index == avengers_arr.length)
            {
                index = 0;
            }

            if(index < 0)
            {
                index = avengers_arr.length - 1;
            }

            Main_UI.get_avenger_data(index);

            console.log(index);
        },2000)
    });
}

init();