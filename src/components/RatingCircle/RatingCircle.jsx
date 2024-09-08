import React from 'react';

const RatingCircle = ({ rating }) => {

        return (
            <div className="rating-container">
                <div
                    className="rating-circle"
                    style={{ "--rating": rating }}
                >
                    <span className={`rating-text font-bold ${rating > 7 ? 'text-red-500' : 'text-amber-600'}`}>{rating}</span>
                </div>
            </div>
        );
};

export default RatingCircle;
