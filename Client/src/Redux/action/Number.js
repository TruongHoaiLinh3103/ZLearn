export const mapStateToProps = (state) => {
    return {
        number: state.numberState.number,
        showPra: state.numberState.showPra
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        tang: (tang) => dispatch({type: 'tang', payload: tang}),
        show: (show) => dispatch({type: 'show', payload: show})
    }
}