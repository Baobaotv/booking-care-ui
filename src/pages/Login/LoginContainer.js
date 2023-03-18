import Login from './Login';
import userService from '~/service/UserService';

function LoginContainer({ type }) {
    const actionSignIn = async () => {
        const body = {
            username: document.getElementById('usernameLogin').value,
            password: document.getElementById('passwordLogin').value,
        };
        const result = await userService.signIn(body).then((response) => response.data);
        console.log(result);
        localStorage.setItem('token', JSON.stringify(result));
        return result;
    };

    const actionSignup = (body) => {
        const result = userService.signup(body);
        console.log(result);
        return result;
    };

    return <Login actionSignIn={actionSignIn} actionSignup={actionSignup} type={type}></Login>;
}

export default LoginContainer;
