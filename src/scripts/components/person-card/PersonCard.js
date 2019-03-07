import React from 'react';
import PropTypes from 'prop-types';
import './PersonCard.scss';

const PersonCard = ({ data }) => {
    const { picture, name, gender, location } = data;

    return (
        <article className='person-card'>
            <figure className='person-card__fig'>
                <img
                    className='person-card__pic'
                    alt='user_pic'
                    src={picture.large}
                />
            </figure>
            <h2 className='person-card__title'>
                {`${name.first} ${name.last}`}
            </h2>
            <footer>
                <span className='person-card__gender'>
                    {gender}
                </span>
                <span className='person-card__city'>
                    {location.city}
                </span>
            </footer>
        </article>
    );
};

PersonCard.defaultProps = {
    data: {},
};

PersonCard.propTypes = {
    data: PropTypes.object,
};

export default PersonCard;
