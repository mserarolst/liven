import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Thumb = (props) => {
    const [loading, setLoading] = useState(false);
    const [thumb, setThumb] = useState();

    useEffect(() => {
        if (props.file) {
            setLoading(true);
            let reader = new FileReader();

            reader.onloadend = () => {
                setLoading(false);
                setThumb(reader.result);
            };
            reader.readAsDataURL(props.file);
        }
    }, [props.file]);

    if (!props.file) {
        return null;
    }

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <img
            src={thumb}
            alt={props.file.name}
            className="img-thumbnail mt-2"
            height={200}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
    );
};

Thumb.propTypes = {
    file: PropTypes.string,
};

export default Thumb;
