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
              {/* phone */}
              <ContactItem
                label="Phone number"
                value={tel.map(itm => (
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
              {/* email */}
              <ContactItem
                label="E-mail"
                value={
                  <a
                    className="link-base"
                    href={`mailto:${email}`}
                    aria-label="Contact email"
                  >
                    {email}
                  </a>
                }
              />
            </div>
            {/* socials */}
            <FollowUs className="contacts__follow-us" />
          </div>
          {/* feedback */}
          <FeedbackForm className="feedback" />
        </div>
      </div>
    </section>
  );
};
