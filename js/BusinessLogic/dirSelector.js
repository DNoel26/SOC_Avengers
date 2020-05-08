
const Direction_Selector = {

    left_arrow : false,
    right_arrow : false,
    forward_direction : true,

    user_direction_sel()
    {
        if(this.left_arrow == false && this.right_arrow == false)
        {
            this.forward_direction = true;
        }
        
        else if(this.left_arrow == true && this.right_arrow == false)
        {
            this.forward_direction = false;
        }

        else if(this.right_arrow == true && this.left_arrow == false)
        {
            this.forward_direction = true;
        }

        return this.forward_direction;
    }
}

export default Direction_Selector;