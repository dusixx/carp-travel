'use client';

import { contactsData } from '@/data';

import {
  SectionTitle,
  ContactItem,
  FollowUs,
  FeedbackForm,
} from '@/components';

const { tel, email } = contactsData;

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
                value={tel.map(itm => (
                  <a key={itm} href={`tel:${itm.replace(/[^\d]/g, '')}`}>
                    {itm}
                  </a>
                ))}
              />
              <ContactItem
                label="E-mail"
                value={<a href={`mailto:${email}`}>{email}</a>}
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
