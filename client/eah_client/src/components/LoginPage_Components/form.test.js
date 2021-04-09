import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../../utils/testUtils';
import Form from './form';
import { login } from '../../actions/auth'
import { checkProps } from '../../utils/testUtils'

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const component = shallow(<Form store={store} />).childAt(0).dive();
    // console.log(component.debug())
    return component;
};

describe('Form Component', () => {

    let component;

    describe('Rendering', () => {

        it('Should render without errors', () => {
            const initialState = {
                auth: {
                    "isAuth": false,
                    "login": login
                }
            }
            component = setUp(initialState);
            const wrapper = findByTestAtrr(component, 'LeftPanel');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a logo', () => {
            const initialState = {
                auth: {
                    isAuth: false,
                    login: login
                }
            }
            component = setUp(initialState);
            const logo = findByTestAtrr(component, 'logo');
            expect(logo.length).toBe(1);
        });
    
        it('Should render a button', () => {
            const initialState = {
                auth: {
                    isAuth: false,
                    login: login
                }
            }
            component = setUp(initialState);
            const wrapper = findByTestAtrr(component, 'LoginButton');
            expect(wrapper.length).toBe(1);
        });
    })

    describe('Check PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                    "isAuth": true,
                    login  
            }

            const props = checkProps(Form, expectedProps)
            expect(props).toBeUndefined();
            // console.log(propsError)
        })
    })

    // describe('Login', () => {

    //     it('Logs in without errors', async () => {

    //         let a = await login("mighil@gmail.com", "mighil")
    //         console.log(a)
    //         expect(a).toBe('Login Success')
    //         // console.log(propsError)
    //     })
    // })

    // beforeEach(() => {

    //     const initialState = {
    //         auth: {
    //             isAuth: false
    //         }
    //     }
    //     component = setUp(initialState); 
    // });

    

    it('Redirect if authenticated', () => {
        const initialState = {
            auth: {
                isAuth: true
            }
        }
        component = setUp(initialState);
        const wrapper = findByTestAtrr(component, 'redirect');
        expect(wrapper.length).toBe(1);
    });

    
    // it('Should render a logo', () => {
    //     const logo = findByTestAtrr(component, 'logoIMG');
    //     expect(logo.length).toBe(1);
    // });

});