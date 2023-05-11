import { useMemo, useState } from 'react';
import { GoogleMap, MarkerF, Autocomplete, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import classNames from 'classnames/bind';
import styles from './Map.module.scss';
function Map({ lat, lng }) {
    const cx = classNames.bind(styles);
    const center = useMemo(() => ({ lat: lng, lng: lat }), []);
    const [searchResult, setSearchResult] = useState('');
    const [option, setOption] = useState();
    const [response, setResponse] = useState();
    const [isRender, setIsRnder] = useState(false);

    function onLoad(autocomplete) {
        setSearchResult(autocomplete);
    }

    function directionsCallback(response) {
        console.log(response);
        console.log('callback');

        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response);
                setOption({});
            } else {
                console.log('response: ', response);
            }
        }
    }

    function onPlaceChanged() {
        if (searchResult != null) {
            let place = searchResult.getPlace();
            console.log(place);
            console.log(place.formatted_address);
            setOption({
                origin: center,
                destination: place.formatted_address,
                travelMode: 'DRIVING',
            });
            setIsRnder(true);
        } else {
            alert('Please enter text');
        }
    }

    return (
        <div className={cx('wrapper')}>
            <GoogleMap zoom={15} center={center} mapContainerClassName={cx('map-container')}>
                <MarkerF position={center} />
                {!!option && (
                    <DirectionsService
                        // required
                        options={option}
                        // required
                        callback={directionsCallback}
                        // optional
                        onLoad={(directionsService) => {
                            console.log('DirectionsService onLoad directionsService: ', directionsService);
                        }}
                        // optional
                        onUnmount={(directionsService) => {
                            console.log('DirectionsService onUnmount directionsService: ', directionsService);
                        }}
                    />
                )}

                {response !== null && isRender && (
                    <DirectionsRenderer
                        // required
                        options={{
                            directions: response,
                        }}
                        // optional
                        onLoad={(directionsRenderer) => {
                            console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer);
                        }}
                        // optional
                        onUnmount={(directionsRenderer) => {
                            console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer);
                        }}
                    />
                )}
            </GoogleMap>
            <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad} className={cx('search-location')}>
                <div>
                    <p className={cx('search-location-title')}>{'Đường đến nhà tôi'}</p>
                    <input placeholder="Hãy nhập địa chỉ của bạn" className={cx('my-location')} />
                </div>
            </Autocomplete>
        </div>
    );
}

export default Map;
