import { ContactItem } from './ContactItem';

const list = ['facebook', 'instagram', 'youtube', 'tiktok'];
const socials = list.map(name => (
  <a
    key={name}
    className="link"
    aria-label={`${name} link`}
    href={`https://${name}.com`}
    rel="noreferrer noopener nofollow"
    target="_blank"
  >
    {name}
  </a>
));

export const FollowUs = ({ className }) => (
  <ContactItem className={className} label="Follow us" value={socials} />
);
