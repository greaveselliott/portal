import React from 'react';
import { shallow } from 'enzyme';
import Page from './page';

const defaultProps = {
  children: [],
  className: undefined,
  title: undefined
};
const render = (props = defaultProps) => shallow(<Page {...props} />);

describe('Page component...', () => {
  fit('should render correctly', () => {
    const SUT = render({ children: [1, 2, 3], className: 'abc', title: 'abc' });

    expect(SUT).toMatchInlineSnapshot(`
<div
  className="eg-page abc"
>
  <h1
    className="eg-page__title"
  >
    abc
  </h1>
  <main
    className="eg-page__body"
  >
    1
    2
    3
  </main>
</div>
`);
  });
});
