import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

const defaultProps = {
  className: undefined,
  name: undefined,
  placeholder: undefined,
  type: undefined
};
const render = (props = defaultProps) => shallow(<Input {...props} />);

describe('Input component...', () => {
  it('should render correctly', () => {
    const SUT = render({
      className: 'abc',
      name: 'abc',
      placeholder: 'abc',
      type: 'text'
    });

    expect(SUT).toMatchInlineSnapshot(`
<div
  className="eg-input abc"
>
  <label
    className="eg-input__label"
    htmlFor="abc"
  >
    abc
  </label>
  <input
    className="eg-input__text"
    id="abc"
    placeholder="abc"
    type="text"
  />
</div>
`);
  });
});
