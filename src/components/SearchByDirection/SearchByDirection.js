import { useMemo, useRef, useState } from 'react';
import { GoogleMap, MarkerF, Autocomplete, DirectionsService } from '@react-google-maps/api';
import classNames from 'classnames/bind';
import styles from './SearchByDirection.module.scss';
import hospitalService from '~/service/HospitalService';

function SearchByDirection({ setTypeSearch, setHospitals }) {
    const cx = classNames.bind(styles);
    const center = useMemo(() => ({ lat: 21.074669398295587, lng: 105.63330888748169 }), []);
    const [searchResult, setSearchResult] = useState('');
    const [option, setOption] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [conditions, setConditions] = useState();
    const [index, setIndex] = useState(0);
    const userLocation = useRef();

    const getNearbyHospital = async () => {
        if (!userLocation.current.value && (!lat || !lng)) {
            alert('Vui lòng nhập địa chỉ');
            return;
        }
        await setIndex(0);
        let result = await hospitalService.getNearbyHospital(lat, lng).then((response) => response);
        console.log(result);
        if (!result) return;

        await setConditions(result);
        setResultToOption();
        setTypeSearch('LOCATION');
    };

    const setResultToOption = () => {
        if (index < conditions.length) {
            setOption({
                origin: {
                    lat: conditions[index].latitude,
                    lng: conditions[index].longitude,
                },
                destination: {
                    lat: lat,
                    lng: lng,
                },
                travelMode: 'DRIVING',
            });
            setIndex(index + 1);
        } else {
            if (index === conditions.length) {
                setHospitals(conditions);
            } else {
                setOption({});
            }
        }
    };

    function onLoad(autocomplete) {
        setSearchResult(autocomplete);
    }

    const directionsCallback = async (response) => {
        console.log(response);
        if (response !== null) {
            if (response.status === 'OK') {
                setOption({});
                let location = response.request.origin.location;
                let legs = response.routes[0].legs[0];
                await findResult(location, legs);
                setResultToOption();
            } else {
                console.log('response: ', response);
            }
        }
    };

    const findResult = (location, legs) => {
        for (let i = 0; i < conditions.length; i++) {
            if (conditions[i].latitude === location.lat() && conditions[i].longitude === location.lng()) {
                conditions[i].duration = legs.duration.text;
                conditions[i].distance = legs.distance.text;
                console.log(conditions[i]);
            }
        }
    };

    function onPlaceChanged() {
        if (searchResult != null) {
            let place = searchResult.getPlace();
            console.log(place);
            setLat(place.geometry.location.lat());
            setLng(place.geometry.location.lng());
            console.log();
            console.log(place.formatted_address);
            // setOption({
            //     origin: center,
            //     destination: place.formatted_address,
            //     travelMode: 'DRIVING',
            // });
        } else {
            alert('Please enter text');
        }
    }

    return (
        <div className={cx('search-by-location')}>
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
            </GoogleMap>
            <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
                <div className={cx('search-by-location-address')}>
                    <input
                        placeholder="Địa chỉ của bạn"
                        id="your-location"
                        className={cx('search-input-address')}
                        ref={userLocation}
                    ></input>
                </div>
            </Autocomplete>
            <div>
                <input
                    placeholder="Kinh độ "
                    value={lng}
                    id="your-lng"
                    onChange={(e) => setLng(e.target.value)}
                    className={cx('search-input-lat')}
                ></input>
                <input
                    placeholder="Vĩ độ "
                    value={lat}
                    id="your-lat"
                    onChange={(e) => setLat(e.target.value)}
                    className={cx('search-input-lon')}
                ></input>
                <button className={cx('btn-search')} onClick={getNearbyHospital}>
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}

export default SearchByDirection;
