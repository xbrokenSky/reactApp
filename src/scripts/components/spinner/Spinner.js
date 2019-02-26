import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='lds-css ng-scope'>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    className='lds-ripple'
                >
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
};

export default Spinner;
