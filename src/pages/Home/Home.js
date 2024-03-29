import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { default as SliderCustom } from '~/components/Slider';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import ContentWithBackground from '~/components/ContentWithBackground';
import ContentNotBackground from '~/components/ContentNotBackground';
import ContentWithCommunication from '~/components/ContentWithCommunication';
import ContentDownloadApp from '~/components/ContentDownloadApp';
import MessageTemplateSmall from '~/components/MessageTemplateSmall';
import ItemBubbleMessage from '~/components/helper/ItemBubbleMessage';

const cx = classNames.bind(styles);

function Home({
    recentHandbooks,
    doctorOnline,
    featuredHospitals,
    featuredSpecialty,
    featuredDoctors,
    featuredHandbooks,
    isShowMessage,
    onShowMessage,
    messages,
    sendMessage,
}) {
    return (
        <>
            <SliderCustom></SliderCustom>
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
                _slider={true}
            ></ContentNotBackground>

            {/* Cẩm nang */}
            <ContentWithBackground
                title={'Cẩm nang'}
                listDataItem={featuredHandbooks}
                type={'handbook'}
                slideNumber={2}
            ></ContentWithBackground>

            {/* Truyền thông: video ytb */}
            <ContentWithCommunication title={'Truyền thông nói về BookingCare'}></ContentWithCommunication>

            {/* Dơnload app */}
            <ContentDownloadApp></ContentDownloadApp>
            {/* <video
                className={cx('modal-self-video')}
                src={'https://www.youtube.com/64d3fe7e-4737-4642-a11b-97f9e1f685f0'}
                autoPlay={true}
                id="self"
            ></video> */}
            <MessageTemplateSmall
                isShow={!!isShowMessage}
                onShowMessage={onShowMessage}
                messages={messages}
                sendMessage={sendMessage}
            ></MessageTemplateSmall>
            <ItemBubbleMessage isShow={!isShowMessage} onShowMessage={onShowMessage}></ItemBubbleMessage>
        </>
    );
}

export default Home;
