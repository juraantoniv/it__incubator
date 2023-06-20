import { combineReducers, createStore } from "redux";


export type initStateType1 ={

    themeId:number
}

const initState:initStateType1 = {
    themeId:1
}

export const themeReducer = (state = initState, action: changeThemeIdType):initStateType1 => { // fix any
    switch (action.type) {

        case'SET_THEME_ID':{

            return {...state,themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeIdAC = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any


export type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}







const reducers1 = combineReducers({

    data1:themeReducer

});




export type AppRoot1 = ReturnType<typeof reducers1>

const store1 = createStore(reducers1);





export default store1;