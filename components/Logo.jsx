import Image from 'next/image';
import logo from '../public/logo.svg';

export const Logo = () => (
  <a href="/">
    <Image className="logo" src={logo} alt="Carp travel logo" priority={true} />
  </a>
);
