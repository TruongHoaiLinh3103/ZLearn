export const mapStateToProps = (state) => {
    return {
        dataUser: state.userState.user
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        deleteUser: (userDelete) => dispatch({type: 'DELETE__USER', payload: userDelete}),
        addUser: (userAdd) => dispatch({type: 'ADD__USER', payload: userAdd})
    }
}
