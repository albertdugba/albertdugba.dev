import Link from 'next/link';
import {
  Container,
  ButtonLink,
  CardList,
  Card,
  CardHeader,
  CardAuthor,
  AuthorAvatar,
  AuthorName,
  AuthorNamePrefix,
  Tags,
} from './styles';

const Projects = () => {
  return (
    <div style={{ background: '#201c29' }}>
      <div className="container">
        <Container>
          <div>
            <h1>I design and experiments with new technologies.</h1>
            <ButtonLink>
              <Link href="/works">
                <a>See my work</a>
              </Link>
            </ButtonLink>
          </div>

          <CardList>
            <Card>
              <CardHeader>
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </CardHeader>
              <CardAuthor>
                <AuthorAvatar>
                  <img src="https://instagram.facc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/165471823_894836077733531_4585199131174438146_n.jpg?tp=1&_nc_ht=instagram.facc1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RB8y058YcWkAX-PddBr&ccb=7-4&oh=90736025cab2b3f938d2ab284e5d01cc&oe=608AD651&_nc_sid=83d603" />
                </AuthorAvatar>
                <svg className="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <AuthorNamePrefix>Author</AuthorNamePrefix>
              </CardAuthor>
            </Card>
            <Card>
              <CardHeader>
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </CardHeader>
            </Card>
          </CardList>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
