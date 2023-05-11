import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: "red" | 'secondary' | ''
    color?:boolean|undefined
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        color,
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {


    // const isRed = xType === 'red' && s.red
    // const isSecondary = xType === 'secondary' && s.secondary
    // const xtypeCondition = isRed || isSecondary || s.default
    //
    // const disableCondition = disabled ? s.disabled : xtypeCondition
    const disableCondition = color ? s.color : ''

    const finalClassName = `${s.button} ${disableCondition}`


    return (


        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
