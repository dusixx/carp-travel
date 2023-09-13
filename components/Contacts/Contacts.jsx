/* eslint-disable react/jsx-key */
'use client';

import { SectionTitle } from '../misc';
import { ContactItem } from './ContactItem';
import { FollowUs } from './FollowUs';
import { FeedbackForm } from './FeedbackForm';

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="inner-container">
        <SectionTitle caption="Contact us" accent={1} />
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <div className="contacts__group">
              <ContactItem
                label="Phone number"
                value={[
                  <a href="tel:+380981234567">+38 (098) 12 34 567</a>,
                  <a href="tel:+380981234567">+38 (099) 76 54 321</a>,
                ]}
              />
              <ContactItem
                label="E-mail"
                value={
                  <a href="mailto:support@carptravel.com">
                    support@carptravel.com
                  </a>
                }
              />
            </div>
            <FollowUs className="contacts__follow-us" />
          </div>
          <FeedbackForm className="contacts__feedback" />
        </div>
      </div>
    </section>
  );
};
