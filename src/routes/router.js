import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

import config from '~/config/config';
import HeaderOnly from '~/Layout/HeaderOnly';
import Hospital from '~/pages/Hospital';
import DetailHospital from '~/pages/DetailHospital';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.hospital, component: Hospital },
    { path: config.routes.hospitalDetail, component: DetailHospital },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
