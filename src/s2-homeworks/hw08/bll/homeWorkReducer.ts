import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state].sort((a,b) => {
                if (a.name > b.name) {
                    return 1
                }else if (a.name < b.name) {
                    return -1
                }else {
                    return 0
                }
            })

            return  action.payload === 'up' ? newState : newState.reverse()

            // return state.sort(function(a, b) {
            //
            //
            //
            //     const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            //
            //     if (action.payload==='down') {
            //
            //         if (nameA < nameB) {
            //             return -1;
            //         }
            //     }
            //     if (action.payload==='up') {
            //
            //         if (nameA > nameB) {
            //             return 1;
            //         }
            //     }
            //     return 0
            // })// need to fix
        }
        case 'check': {

            return state.filter(el=>el.age>action.payload)
        }
        default:
            return state
    }
}
