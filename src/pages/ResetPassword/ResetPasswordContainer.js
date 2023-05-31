import { useState } from 'react';
import ResetPassword from './ResetPassword';
import userService from '~/service/UserService';
import { useSearchParams } from 'react-router-dom';

function ResetPasswordContainer() {
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [validateMSG, setValidateMSG] = useState();
    const [searchParams] = useSearchParams();

    function validate() {
        const msg = {};
        if (!password) {
            msg.password = 'Vui lòng nhập mật khẩu';
        } else {
            if (password.length < 6) {
                msg.password = 'Mật khẩu chứ ít nhất 6 kí tự';
            }
        }
        if (!passwordConfirm) {
            msg.passwordConfirm = 'Vui lòng nhập mật khẩu xác minh';
        } else {
            if (passwordConfirm !== password) {
                msg.passwordConfirm = 'Mật khẩu không khớp vui lòng nhập lại';
            }
        }
        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const actionReset = async () => {
        let isValid = validate();
        if (!isValid) return;
        const body = {
            password,
            userName: searchParams.get('username'),
            key: searchParams.get('key'),
        };

        console.log(body);

        let result = await userService.resetPassword(body);
        if (result.status === 400) {
            result = await result.text().then((messages) => {
                return messages;
            });
            alert(result);
            return;
        } else {
            alert('Thay đổi mật khẩu thành công');
            window.location.replace('/');
        }
    };

    return (
        <ResetPassword
            password={password}
            setPassword={setPassword}
            setPasswordConfirm={setPasswordConfirm}
            passwordConfirm={passwordConfirm}
            validateMSG={validateMSG}
            actionReset={actionReset}
        ></ResetPassword>
    );
}

export default ResetPasswordContainer;
