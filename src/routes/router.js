import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

import config from '~/config/config';
import HeaderOnly from '~/Layout/HeaderOnly';
import Hospital from '~/pages/Hospital';
import DetailHospital from '~/pages/DetailHospital';
import Handbook from '~/pages/Handbook';
import HandbookList from '~/pages/HandbookList';
import HandbookDetail from '~/pages/HandbookDetail';
import Doctor from '~/pages/Doctor';
import DoctorDetail from '~/pages/DoctorDetail';
import SpecialtyDetailContainer from '~/pages/SpecialtyDetail';
import Login from '~/pages/Login';
import EmptyLayout from '~/Layout/EmptyLayout';
import HomeContainer from '~/pages/Home';
import SpecialtyContainer from '~/pages/Specialty';
import Booking from '~/pages/Booking';
import PaymentResponseContainer from '~/pages/PaymentResponse/PaymentResponseContainer';
import MyMessageContainer from '~/pages/MyMessage/MyMessageContainer';
import UpdateProfile from '~/pages/UpdateProfile';
import MyCalender from '~/pages/MyCalender';
import DetailCalender from '~/pages/DetailCalender';
import UpdateBooking from '~/pages/UpdateBooking';
import UpdateTimeBooking from '~/pages/UpdateTimeBooking';
import ForgotPassword from '~/pages/ForgotPassword/ForgotPasswordContainer';
import ResetPassword from '~/pages/ResetPassword';
import ChangePassword from '~/pages/ChangePassword';

const publicRoutes = [
    { path: config.routes.home, component: HomeContainer },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.hospital, component: Hospital },
    { path: config.routes.hospitalDetail, component: DetailHospital },
    { path: config.routes.hospitalDetail, component: DetailHospital },
    { path: config.routes.booking, component: Booking },
    { path: config.routes.updateBooking, component: UpdateBooking },
    { path: config.routes.updateTimeBooking, component: UpdateTimeBooking },
    { path: config.routes.handbook, component: Handbook },
    { path: config.routes.handbookList, component: HandbookList },
    { path: config.routes.handbookDetail, component: HandbookDetail },
    { path: config.routes.doctor, component: Doctor },
    { path: config.routes.doctorDetail, component: DoctorDetail },
    { path: config.routes.specialty, component: SpecialtyContainer },
    { path: config.routes.specialtyDetail, component: SpecialtyDetailContainer },
    { path: config.routes.login, component: Login, layout: EmptyLayout },
    { path: config.routes.register, component: Login, layout: EmptyLayout },
    { path: config.routes.paymentResponse, component: PaymentResponseContainer, layout: EmptyLayout },
    { path: config.routes.myMessage, component: MyMessageContainer },
    { path: config.routes.updateProfile, component: UpdateProfile },
    { path: config.routes.changePassword, component: ChangePassword },
    { path: config.routes.myCalender, component: MyCalender },
    { path: config.routes.detailCalender, component: DetailCalender },
    { path: config.routes.forgotPassword, component: ForgotPassword, layout: EmptyLayout },
    { path: config.routes.resetPassword, component: ResetPassword, layout: EmptyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
