import CheckPropTypes from "check-prop-types"
import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./../reducers";
import { middlewares } from "./../createStore";


export const findByTestAtttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};


export const checkProps = (component, expectedProps)=>{

  const propsErr = CheckPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propsErr;
}


export const testStore = (initialState)=>{
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}