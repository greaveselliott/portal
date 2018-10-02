import React from 'react';
import Image from './image';
import { shallow } from 'enzyme';

describe('Image component...', () => {
    const defaultProps = { className: '', height: null, src: '', width: null };
    const render = (props = defaultProps) => shallow(<Image {...props} />);

    it('should render correctly', () => {
        const SUT = render({
            className: 'abc',
            height: 123,
            src: 'abc',
            width: 123
        });
        
        expect(SUT).toMatchSnapshot();
    });
});