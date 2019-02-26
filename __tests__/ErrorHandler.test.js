import React from 'react';
import { shallow } from 'enzyme';
import ErrorHandler from '../src/scripts/components/error-handler';

describe('Check ErrorHandler component', () => {
    it('Correct renders svg', () => {
        const result = shallow(<ErrorHandler />).find('svg.error-handler__icon').length;
        expect(result).toBe(1);
    });
    it('Correct renders error\'s text', () => {
        const result = shallow(<ErrorHandler />).find('h1.error-handler__txt').length;
        expect(result).toBe(1);
    });
});
