import Login from './Login';
import userService from '~/service/UserService';
import config from '~/config';
import { useState } from 'react';

function LoginContainer({ type }) {
    const [fullName, setFullName] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [validateMSG, setValidateMSG] = useState();

    const actionSignIn = async () => {
        const body = {
            username: document.getElementById('usernameLogin').value,
            password: document.getElementById('passwordLogin').value,
        };
        let result = await userService.signIn(body).then((response) => response);
        if (result.status === 401) {
            alert('Tài khoản hoặc mật khẩu không chính xác, xin vui lòng nhâp lại');
            return;
        }
        result = result = await result.json().then((res) => res);
        localStorage.setItem('token', JSON.stringify(result));
        if (result.roles.includes('ROLE_ADMIN')) {
            window.location.replace(config.hostBe + config.adminUrl);
        }
        if (result.roles.includes('ROLE_DOCTOR')) {
            window.location.replace(config.hostBe + config.adminUrl);
        }
        window.location.replace('/');
    };

    function validate() {
        let msg = {};
        if (!fullName) {
            msg.fullName = 'Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú';
        }
        if (!userName) {
            msg.userName = 'Vui lòng nhập tên đăng nhập';
        }
        if (!phone) {
            msg.phone = 'Vui lòng nhập tên đăng nhập';
        } else {
            const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            if (!phone.match(regexPhoneNumber)) {
                msg.phone = 'Số điện thoại không đúng, vui lòng nhập lại';
            }
        }
        if (!email) {
            msg.email = 'Vui lòng nhập địa chỉ email';
        } else {
            if (
                !String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    )
            ) {
                msg.email = 'Email không đúng, vui lòng nhập lại địa chỉ email';
            }
        }

        if (!password) {
            msg.password = 'Không được để trống mục này';
        }
        if (!passwordConfirm) {
            msg.passwordConfirm = 'Không được để trống mục này';
        } else {
            if (password !== passwordConfirm) {
                msg.passwordConfirm = 'Mật khẩu không khớp';
            }
        }

        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const actionSignup = async () => {
        let isValid = validate();
        if (!isValid) return;
        let body = {
            name: fullName,
            username: userName,
            email: email,
            phone: phone,
            password: password,
        };
        let result = await userService.signup(body);
        console.log(result);
        if (result.status === 400) {
            alert('Username đã tồn tại, vui lòng nhập lại thông tin');
        }
        result = await result.json().then((res) => res);
        alert('Đăng kí thành công');
        window.location.replace('/');
    };

    return (
        <Login
            actionSignIn={actionSignIn}
            actionSignup={actionSignup}
            type={type}
            fullName={fullName}
            setFullName={setFullName}
            phone={phone}
            setPhone={setPhone}
            password={password}
            setPassword={setPassword}
            passwordConfirm={passwordConfirm}
            setPasswordConfirm={setPasswordConfirm}
            email={email}
            setEmail={setEmail}
            userName={userName}
            setUserName={setUserName}
            validateMSG={validateMSG}
        ></Login>
    );
}

export default LoginContainer;
