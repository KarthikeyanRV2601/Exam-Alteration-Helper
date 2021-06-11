import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
// import { middlewares } from '../store';
export const middleware = [thunk];

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    // console.log(component.name)
    // console.log(component.propTypes)
    const propsErr = checkPropTypes(component.WrappedComponent.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    // const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    // return createStoreWithMiddleware(rootReducer, initialState);
    return createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(...middleware)
    );
};