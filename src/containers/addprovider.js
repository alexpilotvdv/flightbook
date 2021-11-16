//оборачивает провайдером
import { Provider } from 'react-redux';
import store from '../store/index';
import React from 'react';
import ContAddrecord from './newrecordTest';

const addprovider = () => {
  
        return (
            <Provider store={store}>
                <ContAddrecord />
            </Provider>
        )
    
}

export default addprovider