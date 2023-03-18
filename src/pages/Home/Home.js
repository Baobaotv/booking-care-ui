import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/components/Slider';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import ContentWithBackground from '~/components/ContentWithBackground';
import ContentNotBackground from '~/components/ContentNotBackground';
import ContentWithCommunication from '~/components/ContentWithCommunication';
import ContentDownloadApp from '~/components/ContentDownloadApp';

const cx = classNames.bind(styles);

function Home({
    recentHandbooks,
    doctorOnline,
    featuredHospitals,
    featuredSpecialty,
    featuredDoctors,
    featuredHandbooks,
}) {
    return (
        <>
            <Slider></Slider>
            <div className={cx('grid wide')}>
                <div className={cx('content__slider-img')}>
                    {recentHandbooks.map((item) => {
                        return <ServiceItemRedirect type={'handbook'} data={item} key={item.id}></ServiceItemRedirect>;
                    })}
                </div>
            </div>

            {/* Khám online */}
            <ContentWithBackground
                title={'Bác sĩ từ xa qua Video'}
                online={true}
                type="doctor"
                listDataItem={doctorOnline}
            ></ContentWithBackground>

            {/* Chuyen khoa nổi bật */}
            <ContentNotBackground
                title={'Chuyên khoa phổ biến'}
                listDataItem={featuredSpecialty}
                type={'specialty'}
            ></ContentNotBackground>

            {/* Cơ sở y tế nổi bật */}
            <ContentWithBackground
                title={'Cơ sở y tế nổi bật'}
                listDataItem={featuredHospitals}
                type="hospital"
            ></ContentWithBackground>

            {/* Bác sĩ nổi bật */}
            <ContentNotBackground
                title={'Bác sĩ nổi bật'}
                listDataItem={featuredDoctors}
                type={'doctor'}
            ></ContentNotBackground>

            {/* Cẩm nang */}
            <ContentWithBackground
                title={'Cẩm nang'}
                listDataItem={featuredHandbooks}
                type={'handbook'}
            ></ContentWithBackground>

            {/* Truyền thông: video ytb */}
            <ContentWithCommunication title={'Truyền thông nói về BookingCare'}></ContentWithCommunication>

            {/* Dơnload app */}
            <ContentDownloadApp></ContentDownloadApp>
        </>
    );
}

export default Home;
