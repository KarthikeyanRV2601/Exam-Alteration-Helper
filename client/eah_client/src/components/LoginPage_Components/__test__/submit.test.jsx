import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import Form from './ .. /LoginPage_Components';

describe('Form', () => {
    const testValues = {
        email: 'mighil@gmail.com',
        password: 'mighil',
        handleSubmit: jest.fn(),
    };

    it('Submit works', () => {
        const component = shallow(
            <Form {...testValues} />
        );
        component.find('Submit').simulate('click');
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(testValues.handleSubmit).toBeCalledWith({email: testValues.email, password: testValues.password});
    });
});