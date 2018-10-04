import React from 'react';
import { arrayOf, date, shape, string } from 'prop-types';

import { Image, Page } from '@portal/ui-library';

const Apps = ({ apps }) => (
  <Page className="eg-apps" title="Apps">
    {apps &&
      apps.map(app => (
        <section className="eg-apps__app" key={app.id}>
          <Image alt={app.name} className="eg-apps__logo" src={app.logo} />
          <figcaption className="eg-apps__name">{app.name}</figcaption>
        </section>
      ))}
  </Page>
);

Apps.propTypes = {
  apps: arrayOf(
    shape({
      id: string,
      name: string,
      created: date,
      logo: string
    })
  ).isRequired
};

export default Apps;
