import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import userService from '~/service/UserService';

function ForgotPasswordContainer() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [validateMSG, setValidateMSG] = useState();

    function validate() {
        const msg = {};
        if (!username) {
            msg.username = 'Vui lòng nhập tên đăng nhập';
        }
        if (!email) {
            msg.email = 'Vui lòng nhập địa chỉ e mail';
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
        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const actionReset = async () => {
        let isValid = validate();
        if (!isValid) return;
        const body = {
            username,
            email,
        };

        let result = await userService.createUrlResetPassword(body);
        if (result.status === 400) {
            result = await result.text().then((messages) => {
                return messages;
            });
            alert(result);
            return;
        } else {
            alert(
                'Chúng tôi đã gửi một thông báo tới email của bạn. Vui lòng kiểm tra email để hoàn thành bước tiếp theo.',
            );
            window.location.replace('/');
        }
    };

    return (
        <ForgotPassword
            username={username}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            actionReset={actionReset}
            validateMSG={validateMSG}
        ></ForgotPassword>
    );
}

export default ForgotPasswordContainer;
