import React from 'react';
import { arrayOf, date, func, shape, string } from 'prop-types';

import { Button, Image, Page } from '@portal/ui-library';

const Apps = ({ accessToken, apps, onFetchAppUsers }) => (
  <Page className="eg-apps" title="Apps">
    {apps &&
      apps.map(({ id, logo, name }) => (
        <section className="eg-apps__app" key={id}>
          <Image alt={name} className="eg-apps__logo" src={logo} />
          <h2 className="eg-apps__name">{name}</h2>
          <Button onClick={() => onFetchAppUsers({ accessToken, id })}>See Users</Button>
          <Button>Edit</Button>
          <aside className="eg-apps__edit">

          </aside>
        </section>
      ))}
  </Page>
);

Apps.defaultProps = {
  accessToken: undefined
};

Apps.propTypes = {
  accessToken: string,
  apps: arrayOf(
    shape({
      id: string,
      name: string,
      created: date,
      logo: string
    })
  ).isRequired,
  onFetchAppUsers: func.isRequired
};

export default Apps;
