import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export default function TestPlaceInput(props) {
    const { setLocation } = props;
    //setAddress is the funct returned by useState that allows us to update address
    // [] is array destructuring, just breaking out array element 0 and 1
    const [address, setAddress] = useState(''); //lets us keep local state in a function
    console.log('setadd', setAddress);

    function handleChange(address) {
        setAddress(address);
    };

    function handleSelect(address) {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                setLocation(latLng);
            })
            .catch(error => console.error('Error', error));
        setAddress(address);
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(s => {
                            console.log('big puss', s);
                            const className = s.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = s.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    {...getSuggestionItemProps(s, {
                                        className,
                                        style,
                                    })}
                                    key={s.placeId}

                                >
                                    <span>{s.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );

}