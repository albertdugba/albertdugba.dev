import { HomeContainer, Wrapper, NavLink, Card, CardContainer } from './styles';
import { FunctionComponent } from 'react';
import { SocialLinks } from 'components/containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';

interface Props {
  works: any[];
  posts: any[];
}

export const Home: FunctionComponent<Props> = ({ works, posts }) => {
  return (
    <>
      <Wrapper>
        <div className='flex__column'>
          <HomeContainer src='./tech-doodle.png' />
          <HomeContainer src='./tech-doodle.png' />
        </div>
        <div className='text'>
          <div className='justify__between container'>
            <div className='flex'>
              <SocialLinks
                link='https://github.com/albertdugba'
                component={<Github size={20} color='#fff' />}
              />
              <SocialLinks
                className='ml-1'
                link='https://github.com/albertdugba'
                component={<LinkedIn size={20} color='#fff' />}
              />

              <SocialLinks
                className='ml-1'
                link='https://twitter.com/Albert_Dugba'
                component={<Twitter size={20} color='#fff' />}
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
                src='./albertdugba.jpg'
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </ul>
          </div>

          {/* <CardContainer className='container'>
            {works?.map(work => (
              <>
                <Card>
                  <img
                    style={{ width: '100%', maxWidth: '150px' }}
                    src={work.projectImage}
                  />
                </Card>
              </>
            ))}
          </CardContainer> */}
        </div>
      </Wrapper>
    </>
  );
};
