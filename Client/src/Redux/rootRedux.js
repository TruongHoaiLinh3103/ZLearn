const initState = {
    user: [],
    post: []
}
const rootReducer = (state = initState, action) =>
{
    switch(action.type){
        case 'DELETE__USER':
            let user = state.user
            user = user.filter(item => item.id !== action.payload.id)
            return{
                ...state, user
            }
        case 'ADD__USER':
            let usert = {id: action.payload.id, username:action.payload.username}
            return{
                ...state, user:[...state.user, usert]
            }
        default:
            return state
    }
}
export default rootReducer;