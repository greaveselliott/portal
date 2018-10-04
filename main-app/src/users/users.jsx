import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { Image } from '@portal/ui-library';

import './users.scss';

const Users = ({ users }) => (
  <section className="eg-users">
    {users.map(user => (
      <figure className="eg-users__row" key={user.id}>
        <Image className="eg-users__image" src={user.avatar} alt={user.name} />
        <figcaption className="eg-users__caption">
          <span className="eg-users__name">{user.name}</span>
          <span className="eg-users__email">{user.email}</span>
        </figcaption>
      </figure>
    ))}
  </section>
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
