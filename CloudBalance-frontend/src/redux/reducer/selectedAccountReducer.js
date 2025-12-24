const initialState = {
    currAccount:""
};

const selectedAccountReducer = (state = initialState, action) =>{
    switch(action.type){
        case "set_account":
            return {
                currAccount : action.payload
            }
        default:
            return state;
    }
}

export default selectedAccountReducer;