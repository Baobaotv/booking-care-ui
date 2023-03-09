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
import HanbookDetail from '~/pages/HandbookDetail';

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
    { path: config.routes.handbookDetail, component: HanbookDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
