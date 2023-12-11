const rootNumber = (state, action) => {
    switch(action.type) {
        case "tang":
            return{
                number: state.number + 1, showPra: state.showPra
            }
        case "show":
            return{
                number: state.number, showPra: !state.showPra
            }
        default: 
            return state;
    }
};

export default rootNumber;