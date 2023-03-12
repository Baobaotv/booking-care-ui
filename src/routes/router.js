import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

import config from '~/config/config';
import HeaderOnly from '~/Layout/HeaderOnly';
import Hospital from '~/pages/Hospital';
import DetailHospital from '~/pages/DetailHospital';
import Booking from '~/pages/Booking';
import Handbook from '~/pages/Handbook';
import HandbookList from '~/pages/HandbookList';
import HandbookDetail from '~/pages/HandbookDetail';
import Doctor from '~/pages/Doctor';
import DoctorDetail from '~/pages/DoctorDetail';
import Specialty from '~/pages/Specialty';
import SpecialtyDetail from '~/pages/SpecialtyDetail';
import Login from '~/pages/Login';
import EmptyLayout from '~/Layout/EmptyLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.hospital, component: Hospital },
    { path: config.routes.hospitalDetail, component: DetailHospital },
    { path: config.routes.hospitalDetail, component: DetailHospital },
    { path: config.routes.booking, component: Booking },
    { path: config.routes.handbook, component: Handbook },
    { path: config.routes.handbookList, component: HandbookList },
    { path: config.routes.handbookDetail, component: HandbookDetail },
    { path: config.routes.doctor, component: Doctor },
    { path: config.routes.doctorDetail, component: DoctorDetail },
    { path: config.routes.specialty, component: Specialty },
    { path: config.routes.specialtyDetail, component: SpecialtyDetail },
    { path: config.routes.login, component: Login, layout: EmptyLayout },
    { path: config.routes.register, component: Login, layout: EmptyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
