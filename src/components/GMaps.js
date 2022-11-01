import React, { useState } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    KmlLayer,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
import mapStyles from "../Styles/mapStyles";
import compass from "../assets/icons/compass.svg";

const libraries = ["places"];
const mapContainerStyle = {
    height: "500px",
    width: "1000px",
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 1.3521,
    lng: 103.8198,
};



export default function GMaps(url1, state1, url2, state2, url3, state3) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
        libraries,
    });

    // addressToRender;
    // console.log(addressToRender);
    // const [addressToRender, setAddressToRender] = useState()
    // const [markers, setMarkers] = React.useState([]);
    // const [selected, setSelected] = React.useState(null);


    //   const [state1, setState1] = React.useState([]);
    //   const [state2, setState2] = React.useState([]);
    //   const [state3, setState3] = React.useState([]);

    //   const onMapClick = React.useCallback((e) => {
    //     setMarkers((current) => [
    //       ...current,
    //       {
    //         lat: e.latLng.lat(),
    //         lng: e.latLng.lng(),
    //         time: new Date(),
    //       },
    //     ]);
    //   }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    
    
    // const {
    //     ready,
    //     value,
    //     suggestions: { status, data },
    //     setValue,
    //     clearSuggestions,
    // } = usePlacesAutocomplete({
    //     requestOptions: {
    //         location: { lat: () => 1.3521, lng: () => 103.8198 },
    //         radius: 50 * 1000,
    //     },
    // });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    // const handleInput = (e) => {
    //     setValue(e.target.value);
    // };

    // const handleSelect = async (address) => {
    //     setValue(address, false);
    //     clearSuggestions();

    //     try {
    //         const results = await getGeocode({ address });
    //         const { lat, lng } = await getLatLng(results[0]);
    //         // setToRender({ lat, lng });
    //         setMapsReady(true);
    //         panTo({ lat, lng });
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // };
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            {console.log(url1)}
            <Locate panTo={panTo} />
            <div className="mb-4">
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={11.5}
                    center={center}
                    options={options}
                    resetBoundsOnResize={true}
                    // onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    {url1.state1 ? <KmlLayer url={String(url1.url1)} /> : <div />}
                    {url1.state2 ? <KmlLayer url={String(url1.url2)} /> : <div />}
                    {url1.state3 ? <KmlLayer url={String(url1.url3)} /> : <div />}

                    {/* {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))} */}

                    {/* {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null} */}
                </GoogleMap>
            </div>
            <div classname="mt-4" >
                <Search panTo={panTo} />

            </div>

        </div>
    );
    //         <div classname="mt-4" >
    //         <div class="flex justify-center bg-white">
    //         <div className="flex justify-center border-2 border-gray-300 h-10 w-72 rounded-lg text-sm focus:outline-none shadow items-center mt-5">
    //             <Combobox onSelect={(handleSelect)}>
    //                 <ComboboxInput
    //                     value={value}
    //                     onChange={handleInput}
    //                     disabled={!ready}
    //                     className="text-center"
    //                     placeholder="Search your location"
    //                 />
    //                 <ComboboxPopover className="bg-white">
    //                     <ComboboxList>
    //                         {status === "OK" &&
    //                             data.map(({ id, description }) => (
    //                                 <ComboboxOption key={id} value={description} />
    //                             ))}
    //                     </ComboboxList>
    //                 </ComboboxPopover>
    //             </Combobox>
    //         </div>
    //     </div>

    //         </div>

    //     </div>
    // );
}

function Locate({ panTo }) {
    return (<div className="w-full flex justify-center">
        <button
            className="w-max flex"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img classname="p-2 z-10 px-10" src={compass} alt="compass" />
            <p classname="w-max mx-10 text-sm">Pan to current location</p>
        </button></div>
    );
}



function Search({ panTo}) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 1.3521, lng: () => 103.8198 },
            radius: 50 * 1000,
        },
    });

//     // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            // setToRender({ lat, lng });
            // setMapsReady(true);
            panTo({ lat, lng });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        // <div class="align middle">
        //     <input
        //       class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-72 rounded-lg text-sm focus:outline-none shadow"
        //       type="text"
        //       id="header-search"
        //       placeholder="Search for activities near you"
        //       name="s" />
        //   </div>
        <div class="flex justify-center bg-white">
            <div className="flex justify-center border-2 border-gray-300 h-10 w-72 rounded-lg text-sm focus:outline-none shadow items-center mt-5">
                <Combobox onSelect={handleSelect}>
                    <ComboboxInput
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        className="text-center"
                        placeholder="Search your location"
                    />
                    <ComboboxPopover className="bg-white">
                        <ComboboxList>
                            {status === "OK" &&
                                data.map(({ id, description }) => (
                                    <ComboboxOption key={id} value={description} />
                                ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
            </div>
        </div>
    );
}