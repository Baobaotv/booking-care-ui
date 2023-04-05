import Login from './Login';
import userService from '~/service/UserService';
import config from '~/config';

function LoginContainer({ type }) {
    const actionSignIn = async () => {
        const body = {
            username: document.getElementById('usernameLogin').value,
            password: document.getElementById('passwordLogin').value,
        };
        const result = await userService.signIn(body).then((response) => response);
        localStorage.setItem('token', JSON.stringify(result));
        if (result.roles.includes('ROLE_ADMIN')) {
            window.location.replace(config.hostBe + config.adminUrl);
        }
        if (result.roles.includes('ROLE_DOCTOR')) {
            window.location.replace(config.hostBe + config.adminUrl);
        }
        window.location.replace('/');
        console.log('=========da ghi======');
    };

    const actionSignup = (body) => {
        const result = userService.signup(body);
        return result;
    };

    return <Login actionSignIn={actionSignIn} actionSignup={actionSignup} type={type}></Login>;
}

export default LoginContainer;
