import {
  CardList,
  Card,
  CardHeader,
  CardAuthor,
  AuthorAvatar,
  AuthorNamePrefix,
} from './styles';

const Blog = () => {
  return (
    <div className="container" style={{ color: '#fff' }}>
      <h1 style={{ color: 'black' }}>Recent blog posts</h1>
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

            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
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
        <Card>
          <CardHeader>
            <p>31st March, 2021</p>
            <h2>Blog Card</h2>
          </CardHeader>
        </Card>
      </CardList>
    </div>
  );
};

export default Blog;
