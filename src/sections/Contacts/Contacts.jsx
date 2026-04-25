'use client';

import { SectionTitle } from '@/components';
import { ContactItem } from './ContactItem.jsx';
import { ContactsData } from './Contacts.constants.js';
import { FeedbackForm } from './FeedbackForm.jsx';
import { FollowUs } from './FollowUs.jsx';

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <SectionTitle caption="Contact us" accent={1} />
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <div className="contacts__group">
              <ContactItem
                label="Phone number"
                value={ContactsData.Phone.map(itm => (
                  <a
                    className="link-base"
                    key={itm}
                    href={`tel:${itm.replace(/[^\d]/g, '')}`}
                    aria-label="Contact phone"
                  >
                    {itm}
                  </a>
                ))}
              />
              <ContactItem
                label="E-mail"
                value={
                  <a
                    className="link-base"
                    href={`mailto:${ContactsData.Email}`}
                    aria-label="Contact email"
                  >
                    {ContactsData.Email}
                  </a>
                }
              />
            </div>
            <FollowUs className="contacts__follow-us" />
          </div>
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};
