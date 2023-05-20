import ChangePassword from './ChangePassword';
import userService from '~/service/UserService';
import { useRef, useState } from 'react';

function ChangePasswordContainer() {
    const [validateMSG, setValidateMSG] = useState();
    const password = useRef();
    const passwordConfirm = useRef();
    const form = useRef({ password, passwordConfirm });
    const userInfo = JSON.parse(localStorage.getItem('token'));

    function getBody(form) {
        const body = {
            password: !!form.password.current ? form.password.current.value : '',
            userName: userInfo.username,
            passwordConfirm: !!form.passwordConfirm.current ? form.passwordConfirm.current.value : '',
        };
        return body;
    }

    function validate(body) {
        const msg = {};
        if (!body.password) {
            msg.password = 'Vui lòng nhập mật khẩu';
        } else {
            if (body.password.length < 6) {
                msg.password = 'Mật khẩu phải chứa ít nhất 6 kí tự, vui lòng nhập lại';
            }
        }

        if (!body.passwordConfirm) {
            msg.passwordConfirm = 'Vui lòng nhập mật khẩu xác minh';
        } else {
            if (body.password !== body.passwordConfirm) {
                msg.passwordConfirm = 'Mật khẩu xác minh không khớp';
            }
        }

        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const onSubmit = async () => {
        let body = getBody(form.current);
        let isValid = validate(body);
        if (!isValid) return;
        await userService.changePassword(body, userInfo.token).then((response) => response);
        alert('Cập nhật thông tin thành công');
        window.location.replace('/');
    };
    return <ChangePassword form={form.current} onSubmit={onSubmit} validateMSG={validateMSG}></ChangePassword>;
}

export default ChangePasswordContainer;
