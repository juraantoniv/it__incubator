export const initState:initStateType = {
    isLoading: false,
}

export type initStateType = {
    isLoading:boolean
}

export const loadingReducer = (state  = initState, action: LoadingActionType)=> { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":{

            return {...state,isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
