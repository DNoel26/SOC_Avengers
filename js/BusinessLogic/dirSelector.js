
const Direction_Selector = {

    left_arrow : false,
    right_arrow : false,
    forward_direction : true,

    user_direction_sel()
    { 
        if(this.left_arrow == true && this.right_arrow == false)
        {
            this.forward_direction = false;
        }

        return this.forward_direction;
    }
}

export default Direction_Selector;