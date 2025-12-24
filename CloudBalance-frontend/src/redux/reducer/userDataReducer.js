const initialState = {
    loggedIn:false,
    userName:"",
    role:"",
    accounts:[]
};

const userDataReducer = (state=initialState,action) => {
    switch(action.type){
        case "set_loggedIn":
            return {...state,
                loggedIn:true
            }
        case "set_user":
            return {...state,
                userName:action.payload.username,
                role:action.payload.role,
                accounts:action.payload.accounts
            }
        case "set_accounts":
            return{
                ...state,
                accounts: action.payload
            }
        case "set_loggedOut":
            return {
                loggedIn:false,
                userName:"",
                role:"",
                accounts:[]
            }
        default:
            return state
    }
}

export default userDataReducer;