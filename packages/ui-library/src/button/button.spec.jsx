import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';

describe('Button component...', () => {
    const defaultProps = { children: [], onClick: undefined };
    const render = (props = defaultProps) => shallow(<Button {...props} />);

    it('should call click handler', () => {
        const spy = jest.fn();
        const SUT = render({ onClick: spy });

        SUT.simulate('click');

        expect(spy).toHaveBeenCalled();
    });

    it('should render with correct children', () => {
        const SUT = render({ children: [1, 2, 3] });
        
        expect(SUT).toMatchSnapshot();
    });
});