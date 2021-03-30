import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form.jsx';

    describe('Login component tests', ()=> {
        const wrapper = shallow(<Form />);
        it('should have a btn component', ()=> {
            expect(wrapper.find('button')).toHaveLength(1);
            expect(wrapper.find('button').text()).toEqual('Submit');
        });
    }); 