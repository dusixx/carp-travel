/* eslint-disable react/jsx-key */
import { ContactItem } from './ContactItem';

const list = ['facebook', 'instagram', 'youtube', 'tiktok'];
const socials = list.map(name => (
  <a
    className="link"
    href={`https://${name}.com`}
    rel="noreferrer noopener nofollow"
    target="_blank"
  >
    {name}
  </a>
));

export const FollowUs = ({ className }) => {
  return (
    <ContactItem className={className} label="Follow us" value={socials} />
  );
};
