import React from 'react';
import store from '@contexts/store';

export function withContext(Component, mapStateArray) {
    return function WrapperComponent(props) {
        const values = {}
        Object.keys(store).forEach(key => {
            if(mapStateArray.includes(key)) {
                values[key] = store[key]()
            }
        })
        const updatedProps = {
            ...props,
            ...values
        }
        return (
            <Component {...updatedProps}></Component>
        );
    };
}