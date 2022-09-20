import s from './FormsControls.module.css'



const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>

            {hasError && <span className={s.error}>{props.meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}>  <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}>  <input {...input} {...restProps} /></FormControl>
}
