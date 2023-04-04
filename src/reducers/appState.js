const appStateReducer = (
    state = {
        isLoading: false,
    },
    action
) => {
    switch (action.type) {
        case "appState/setLoading":
            return {
                ...state,
                isLoading: !!action.payload,
            }
        default:
            return state;
    }
}

export default appStateReducer;