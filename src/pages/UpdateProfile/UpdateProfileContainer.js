import UpdateProfile from './UpdateProfile';
import userService from '~/service/UserService';
import { useEffect, useRef, useState } from 'react';

function UpdateProfileContainer() {
    const [validateMSG, setValidateMSG] = useState();
    const fullName = useRef();
    const phone = useRef();
    const [oldImg, setOldImg] = useState();
    const img = useRef();
    const email = useRef();
    const form = useRef({ fullName, email, img, phone });
    const userInfo = JSON.parse(localStorage.getItem('token'));

    const onChangeImg = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
        reader.onload = function (e) {
            setOldImg(e.target.result);
        };
    };

    useEffect(() => {
        const getCurrentUser = async (token) => {
            const result = await userService.getInfoCurrentUser(token).then((response) => response);
            fullName.current.value = result.name;
            phone.current.value = result.phone;
            email.current.value = result.email;
            setOldImg(result.img);
        };

        getCurrentUser(userInfo.token);
    }, []);

    function getBody(form) {
        const body = {
            fullName: !!form.fullName.current ? form.fullName.current.value : '',
            phone: !!form.phone.current ? form.phone.current.value : '',
            img: !!form.img.current && form.img.current.files[0] ? form.img.current?.files[0] : null,
            email: form.email.current.value,
        };
        if (!body.img) {
            delete body.img;
        }
        return body;
    }

    function validate(body) {
        const msg = {};
        if (!body.fullName) {
            msg.fullName = 'Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú';
        }

        if (!body.email) {
            msg.email = 'Không được bỏ trống mục này';
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email)) {
                msg.email = 'Email không đúng, vui lòng nhập lại';
            }
        }

        if (!body.phone) {
            msg.phone = 'Không được bỏ trống mục này';
        } else {
            const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            if (!body.phone.match(regexPhoneNumber)) {
                msg.email = 'Số điện thoại không đúng, vui lòng nhập lại';
            }
        }
        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const onSubmit = async () => {
        let body = getBody(form.current);
        console.log(body.img);
        let isValid = validate(body);
        if (!isValid) return;
        let formData = new FormData();
        console.log(formData);
        for (let key in body) {
            formData.append(key, body[key]);
        }
        await userService.updateProfile(formData, userInfo.token).then((response) => response);
        alert('Cập nhật thông tin thành công');
        window.location.reload();
    };
    return (
        <UpdateProfile
            form={form.current}
            img={oldImg}
            onChangeImg={onChangeImg}
            onSubmit={onSubmit}
            validateMSG={validateMSG}
        ></UpdateProfile>
    );
}

export default UpdateProfileContainer;
