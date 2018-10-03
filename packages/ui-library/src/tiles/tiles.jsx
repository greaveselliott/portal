import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { Image } from '@portal/ui-library';

import 'tiles.scss';

const Tiles = ({ items }) => (
    <section className="eg-tiles">
        {
            items.map(item =>
                <figure className="eg-tiles__item">
                    <Image className="eg-tiles__image" src={item.logo} />
                    <figcaption className="eg-tiles__caption">{item.name}</figcaption>
                </figure>
            )
        }
    </section>
);

Tiles.propTypes = {
    items: arrayOf(shape({
        id: string,
        name: string,
        created: string,
        logo: string
    }))
}

export default Tiles;