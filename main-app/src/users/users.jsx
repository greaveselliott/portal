import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { Image, Page } from '@portal/ui-library';

import './users.scss';

const Users = ({ users }) => (
  <Page className="eg-users" title="Users">
    {users.map(user => (
      <figure className="eg-users__row" key={user.id}>
        <Image className="eg-users__image" src={user.avatar} alt={user.name} />
        <figcaption className="eg-users__caption">
          <strong className="eg-users__name">{user.name}</strong>
          <a href={`mailto:${user.email}`} className="eg-users__email">
            {user.email}
          </a>
        </figcaption>
      </figure>
    ))}
  </Page>
);

Users.propTypes = {
  users: arrayOf(
    shape({
      avatar: string,
      email: string,
      id: string,
      name: string
    })
  ).isRequired
};

export default Users;
