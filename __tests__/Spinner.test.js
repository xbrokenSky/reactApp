import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../src/scripts/components/spinner';

describe('Check Spinner UI-component', () => {
    it('Correct renders component', () => {
        const component = shallow(<Spinner />);
        expect(component).toMatchSnapshot();
    });
});
