import styled from 'styled-components';
import { SocialLinks } from 'components/containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import Link from 'next/link';
import { NavLink } from './styles';

export const Header = () => {
  return (
    <header className='justify__between'>
      <div className='flex'>
        <SocialLinks
          link='https://github.com/albertdugba'
          component={<Github width={20} height={20} color='#fff' />}
        />
        <SocialLinks
          className='ml-1'
          link='https://github.com/albertdugba'
          component={<LinkedIn size={20} color='#fff' />}
        />

        <SocialLinks
          className='ml-1'
          link='https://twitter.com/Albert_Dugba'
          component={<Twitter width={20} height={20} color='#fff' />}
        />

        <SocialLinks
          className='ml-1'
          link='https://dev.to/albertdugba'
          component={<Dev size={20} color='#EBE6F3' />}
        />
      </div>

      <ul className='justify__between'>
        <NavLink href='/works'>
          <li className='mr-1'>Works</li>
        </NavLink>
        <NavLink href='/posts'>
          <li className='mr-1'>Blog</li>
        </NavLink>
        <img
          src='https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-0/p526x296/199548180_4843198325707173_1589442917293810159_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGOemwec3Sm0Ilhp_BE4-jSkBJ2qBLkopmQEnaoEuSimbwybb5za71pusO-YCw3CjkN7XuTtpgZsBKaueOuO4eC&_nc_ohc=lf6fKinu5m4AX9S899g&tn=y1hXR3x2ilqp3-Fs&_nc_ht=scontent.facc6-1.fna&tp=6&oh=e5f7ad5db1dc9a9e793d4a321cd21fbe&oe=60DEDB9E'
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      </ul>
    </header>
  );
};
