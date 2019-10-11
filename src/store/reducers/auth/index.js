const initialState = {
    user: {},
    token: null,
    isLoading: false,
    isCompleted: false,
    error: null,
    isAuthenticated: false,
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SIGNUP_PENDING':
            return {
                ...initialState,
                isLoading: true
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isCompleted: true,
                user: action.payload.data,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case 'SIGNUP_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case 'SIGNIN_PENDING':
            return {
                ...initialState,
                isLoading: true
            };
        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isCompleted: true,
                user: action.payload.data,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case 'SIGNIN_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return initialState;
    }
}

export default reducer;
