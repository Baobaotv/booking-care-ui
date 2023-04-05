import images from '~/assets/images';
const routes = {
    home: '/',
    following: '/following',
    profile: '@:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
    hospital: '/benh-vien',
    hospitalDetail: '/benh-vien/chi-tiet',
    booking: '/dat-lich-kham',
    handbook: '/cam-nang',
    handbookList: '/cam-nang/danh-sach-bai-viet',
    handbookDetail: '/cam-nang/chi-tiet-bai-viet',
    doctor: '/bac-si',
    doctorDetail: '/bac-si/chi-tiet-bac-si',
    specialty: '/chuyen-khoa',
    specialtyDetail: '/chuyen-khoa/chi-tiet-chuyen-khoa',
    login: '/dang-nhap',
    register: '/dang-ki',
    forgotPassword: '/quen-mat-khau',
    paymentResponse: '/thong-tin-thanh-toan',
};

const services = [
    {
        to: '/chuyen-khoa',
        title: 'Khám chuyên khoa',
        img: require('~/assets/images/service-khamchuyenkhoa.png'),
    },
    {
        to: '/kham-tu-xa',
        title: 'Khám từ xa',
        img: require('~/assets/images/service-khamtuxa.png'),
    },
    {
        to: '/kham-tong-quat',
        title: 'Khám tổng quát',
        img: require('~/assets/images/service-khamtongquat.png'),
    },
    {
        to: '/xet-nghiem-y-hoc',
        title: 'Xét nghiệm y học',
        img: require('~/assets/images/service-xetnghiem.png'),
    },
    {
        to: '/suc-khoa-tinh-than',
        title: 'Sức khoẻ tinh thần',
        img: require('~/assets/images/service-suckhoetinhthan.png'),
    },
    {
        to: '/Kham-nha-khoa',
        title: 'Khám nha khoa',
        img: require('~/assets/images/service-nhakhoa.png'),
    },
    {
        to: '/goi-phau-thuat',
        title: 'Gói phẫu thuật',
        img: require('~/assets/images/service-goiphauthuat.jpg'),
    },

    {
        to: '/san-pham-y-te',
        title: 'Sản phẩm y tế',
        img: require('~/assets/images/service-sanphamyte.png'),
    },

    {
        to: '/suc-khoe-doanh-nghiep',
        title: 'Sức khoẻ doanh nghiệp',
        img: require('~/assets/images/service-suckhoedoanhnghiep.jpg'),
    },
];

const communicationContents = [
    {
        title: 'Báo sức khỏe đời sống nói về BookingCare',
        href: 'https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-n153232.html',
        img: images.suckhoedoisong,
    },
    {
        title: 'VTV1 - Cà phê khởi nghiệp 14-11-2018',
        href: 'https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm',
        img: images.vtv1,
    },
    {
        title: 'Báo điện tử ictnews giới thiệu BookingCare',
        href: 'https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict',
        img: images.ictnews,
    },
    {
        title: 'VnExpress nói về BookingCare',
        href: 'https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html',
        img: images.vnexpress,
    },
    {
        title: 'VTC News nói về BookingCare',
        href: 'https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-d434101.html',
        img: images.vtcnews,
        backgroundColor: '#a3171e',
    },
    {
        title: 'Cục công nghệ thông tin - Bộ Y tế nói về BookingCare',
        href: 'http://ehealth.gov.vn/?action=News&amp;newsId=46094',
        img: images.cucCNTT,
    },
    {
        title: 'Báo điện tử infonet nói về BookingCare',
        href: 'https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html',
        img: images.infonet,
    },
    {
        title: 'VTV1 - Cà phê khởi nghiệp 16-08-2018',
        href: 'https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm',
        img: images.vtv1,
    },
    {
        title: 'VTC Go nói về BookingCare',
        href: 'https://www.youtube.com/watch?v=mstAc81lpMc',
        img: images.vtcgo,
        backgroundColor: '#16325C',
    },
    {
        title: 'VTV1 - Cà phê khởi nghiệp 21-02-2018',
        href: 'https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm',
        img: images.vtv1,
    },
];
const adminUrl = '/admin/home';

const doctorUrl = '/admin/home';

const hostBe = 'http://192.168.1.239:8080';

const baseUrl = 'http://192.168.1.239:8080/api/';
// const baseUrl = 'http://192.168.1.4:8080/api/';

const pageableDefault = {
    pageDefault: 0,
    sizeDefault: 6,
};

const config = {
    routes,
    services,
    communicationContents,
    baseUrl,
    adminUrl,
    doctorUrl,
    hostBe,
    pageableDefault,
};

export default config;
