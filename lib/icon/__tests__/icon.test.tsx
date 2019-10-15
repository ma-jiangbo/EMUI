// import jest from '@types/jest'
import * as renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import React from "react";
import Icon from '../icon'

describe('icon', ()=> {
   it('is SVG', () => {
       const json = renderer.create(<Icon name='wechat' />).toJSON();
       expect(json).toMatchSnapshot()
   });
    it( 'asset onclick', () => {
        const fn = jest.fn();
        const c = mount(<Icon name='wechat' onClick={fn} />);
        c.find('svg').simulate('click');
        expect(fn).toBeCalled()
    })
});