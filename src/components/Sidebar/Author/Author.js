import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="175"
        height="175"
        alt={author.name}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>
      {author.bio}
      <a
          className={styles['author__bio-twitter']}
          href={getContactHref('instagram', author.contacts.instagram)}
          rel="noopener noreferrer"
          target="_blank"
        > Follow my journey.
        </a>
    </p>
  </div>
);

export default Author;
