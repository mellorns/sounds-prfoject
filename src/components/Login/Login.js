import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Email</label>
                <Field placeholder={'email...'} name={'email'} validate={[required]} component={Input}/>
            </div>
            <div>
                <label>Password</label>
                <Field placeholder={'password'} name={'password'} validate={[required]} component={Input}/>
            </div>
            <div>
                <label>remember me</label>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
            </div>
            {props.error &&
                <div className={s.formError}>
                    {props.error}
                </div>
            }


            <button>Login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    let submitHandle = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div>
            <LoginReduxForm onSubmit={submitHandle}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)