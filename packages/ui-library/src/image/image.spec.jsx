import React from 'react';
import { shallow } from 'enzyme';
import Image from './image';

describe('Image component...', () => {
  const defaultProps = { alt: '', className: '', src: '' };
  const render = (props = defaultProps) => shallow(<Image {...props} />);

  it('should render correctly', () => {
    const SUT = render({
      alt: 'abc',
      className: 'abc',
      src: 'abc'
    });

    expect(SUT).toMatchInlineSnapshot(`
<div
  className="eg-image abc"
>
  <img
    alt="abc"
    className="eg-image__element"
    src="abc"
  />
</div>
`);
  });
});
