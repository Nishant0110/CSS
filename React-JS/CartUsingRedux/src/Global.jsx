const initstate = {
    name: "nishant",
    cart: 0
}
//actiom
let Action_Add_To_Cart = (n) => {
    return { type: "Action", noOfItemsToAdd: n }
};
const obj = Action_Add_To_Cart()//
dispatcher(obj)
//reducer
const dispatcher = (action) => {
    switch (action.type) {
        case 'Action_Add_To_Cart':
            initstate = { ...initstate, cart: initstate.cart + action.noOfItemsToAdd }
            break;

        default:
            return initstate;
    }

}
