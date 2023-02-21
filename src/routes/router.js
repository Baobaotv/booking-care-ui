import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

import config from '~/config/config';
import HeaderOnly from '~/Layout/HeaderOnly';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
