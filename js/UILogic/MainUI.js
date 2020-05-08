
import avengers_arr from "../BusinessLogic/arrAvenger.js";

const Main_UI =
{
    avenger_name_display : document.querySelector("#avenger_text"),
    avenger_img_display : document.querySelector("#avenger_image"),
    left_arrow_display : document.querySelector("#left_arrow"),
    right_arrow_display : document.querySelector("#right_arrow"),

    get_avenger_data(mtd_index)
    {
        this.avenger_name_display.innerHTML = avengers_arr[mtd_index].name;
        this.avenger_img_display.src = `img/${avengers_arr[mtd_index].image}`;
        this.avenger_img_display.alt = avengers_arr[mtd_index].description;
    }
}

export default Main_UI;