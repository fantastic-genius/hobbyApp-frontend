const initialState = {
    hobbies: [],
    isLoading: false,
    isCompleted: false,
    error: null,
    hobby: null,
    message: null,
    isLoadingHobby: false,
    isUpdating: false,
    isDeleting: false,
    isCreating: false,
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_USER_HOBBIES_PENDING':
            return {
                ...initialState,
                isLoading: true
            };
        case 'GET_USER_HOBBIES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isCompleted: true,
                hobbies: action.payload.hobbies,
            };
        case 'GET_USER_HOBBIES_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case 'GET_HOBBY_PENDING':
            return {
                ...state,
                isHobbyLoading: true,
                isCompleted: false
            };
        case 'GET_HOBBY_SUCCESS':
            return {
                ...state,
                isHobbyLoading: false,
                isCompleted: true,
                hobby: action.payload.hobby
            };
        case 'GET_HOBBY_ERROR':
            return {
                ...state,
                isHobbyLoading: false,
                error: action.payload
            };
        case 'UPDATE_HOBBY_PENDING':
            return {
                ...state,
                isUpdating: true
            };
        case 'UPDATE_HOBBY_SUCCESS':
            return {
                ...state,
                isUpdating: false,
                isCompleted: true,
                hobby: action.payload.hobby
            };
        case 'UPDATE_HOBBY_ERROR':
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            };
        case 'DELETE_HOBBY_PENDING':
            return {
                ...state,
                isDeleting: true
            };
        case 'DELETE_HOBBY_SUCCESS':
            return {
                ...state,
                isDeleting: false,
                isCompleted: true,
                message: action.payload.message
            };
        case 'DELETE_HOBBY_ERROR':
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            };
        case 'CREATE_HOBBY_PENDING':
            return {
                ...state,
                isCreating: true
            };
        case 'CREATE_HOBBY_SUCCESS':
            return {
                ...state,
                isCreating: false,
                isCompleted: true,
                hobby: action.payload.hobby
            };
        case 'CREATE_HOBBY_ERROR':
            return {
                ...state,
                isCreating: false,
                error: action.payload
            };
        default:
            return initialState;
    }
}

export default reducer;
