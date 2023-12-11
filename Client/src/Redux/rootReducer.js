const initState = {
    user: [
        {id: 1, name: 'Trương Hoài Linh', age: 20},
        {id: 2, name: 'Anikey', age: 20},
        {id: 3, name: 'Nguyễn Thị Kiều Thu', age: 20}
    ],
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE__USER':
            let user = state.user;
            user = user.filter(item => item.id !== action.payload.id)
            return{
                ...state, user
            }
        case 'ADD__USER':
            let users = {id: action.payload.id, name:action.payload.name, age: action.payload.age}
            return{
                ...state, user:[...state.user, users]
            } 
        default:
            return state
    }
};

export default rootReducer;