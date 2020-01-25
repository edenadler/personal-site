import React from 'react';
import styles from './Page.module.scss';
import Feature from '../Feature'

const Page = ({ title, children }) => {
  if (title === 'Media') {
    return (
      <div className={styles['page']}>
        <div className={styles['page__inner']}>
          { title && <h1 className={styles['page__title']}>{title}</h1>}
          <div className={styles['page__body']}>
            <h2 id="features">Features</h2>
            <Feature image="/media/womenintechweekly.png" link="https://codingblonde.com/eden-adler/"
              title="Coding Blonde - Women in Tech Weekly Feature: Eden"/>
            <Feature image="/media/hummusandtech.jpg" link="https://podcasts.apple.com/us/podcast/episode-10-season-finale-eden-software-engineer-lemonade/id1457747094?i=1000450779906"
              title="Hummus and Tech: Episode 10 Season Finale with Eden, Software Engineer @ Lemonade"/>
            <Feature image="/media/astoldbywomen-min.png" link="https://astoldbywomen.com/eden-adler-let-your-curiosity-lead-you/"
              title="As Told By Women: Let your curiosity lead you with Eden Adler"/>
            <h2 id="speaking-engagements">Speaking Engagements</h2>
            <Feature image="/media/nbn-min.jpg" link="https://www.eventbrite.com/e/next-israel-networking-event-tickets-75132024909#"
              title="Panelist at Next: Israel Networking Event" subtitle="Flown to NY to be one of three panelists at career and networking event"/>
            <Feature image="/media/lewagonevent.png" link="https://www.meetup.com/Le-Wagon-TLV-Coding-Bootcamp/events/261974682/"
              title="Speaking to Le Wagon Coding Bootcamp"/>
            <Feature image="/media/itc.jpeg"
              title="Speaking to Israel Tech Challenge Coding Bootcamp (biannual engagement)"/>
            <h2 id="awards-grants">Awards & Grants</h2>
            <Feature image="/media/izigrant.jpg" link="https://www.jpost.com/Israel-News/Nefesh-BNefesh-awards-twelve-projects-by-olim-with-grants-and-support-581387"
              title="1 of 12 Initiative for Zionist Innovation grant recipients"/>
            <h2 id="mentions">Mentions</h2>
            <a href="https://medium.com/olim-in-tech/the-exhaustive-tel-aviv-tech-resource-list-9dee0d30891b">
              <h4>Tech Resources in Tel Aviv</h4>
            </a>
            <p>Eden Adler, What the Tech, Women of Startup Nation, and Olim in Tech all mentioned</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;