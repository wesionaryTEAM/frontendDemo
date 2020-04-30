
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from './index';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

configure({adapter: new Adapter()})

describe("<Login />", () => {
    it("should render 2 <Input /> component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Input)).toHaveLength(2);
    });

    it("should render 2 <Button /> component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Button)).toHaveLength(2);
    })
})