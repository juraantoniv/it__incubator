import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name:string, setError: (str:string)=>void, setName: (st:string)=>void, addUserCallback: (name:string)=>void ) => {

    if (name){

        setName(name)
        addUserCallback(name)

    }
    else {
        setError('err')
    }

}

export const pureOnBlur = (name: string, setError: (st:string)=>void) => {
    // если имя пустое - показать ошибку
    if (!name) {

        setError('Field is required')

    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {
    if (e.key==='Enter'){
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState(null) // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)// need to fix
        error && setError(null)
    }


    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length > 0 ? users.length : 0 // need to fix
    const lastUserName = users.length > 0 ? users[users.length-1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
