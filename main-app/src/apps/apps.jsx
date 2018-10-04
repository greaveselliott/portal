import React, { createRef } from 'react';
import { arrayOf, date, func, shape, string } from 'prop-types';

import { Button, Input, Image, Page } from '@portal/ui-library';

const Apps = ({ accessToken, apps, onFetchAppUsers, onFetchAppUpdate }) => (
  <Page className="eg-apps" title="Apps">
    {apps &&
      apps.map(({ id, logo, name }) => {
        const appName = createRef();

        return (
          <section className="eg-apps__app" key={id}>
            <Image alt={name} className="eg-apps__logo" src={logo} />
            <h2 className="eg-apps__name">{name}</h2>

            <Button onClick={() => onFetchAppUsers({ accessToken, id })}>See Users</Button>
            <Button>Edit</Button>

            <aside className="eg-apps__edit">
              <Input className="eg-apps__field" ref={appName} />
              <Button
                className="eg-apps__save"
                onClick={() =>
                  onFetchAppUpdate({
                    accessToken,
                    id,
                    appValues: {
                      name: appName.current.value
                    }
                  })
                }
              >
                Save
              </Button>
            </aside>
          </section>
        );
      })}
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
  onFetchAppUsers: func.isRequired,
  onFetchAppUpdate: func.isRequired
};

export default Apps;
