import styled from 'styled-components';

const Header = styled.header`
  background: grey;
  padding: 20px 15px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .logo {
    height: 40px;
    width: 40px;

    a {
      display: inline-block;
      height: 40px;
      width: 40px;
      border: 2px solid var(--skinColor);
      color: var(--skinColor);
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
    }
  }

  .hamburger-btn {
    height: 40px;
    width: 40px;
    /* background-color: blue; */
    span {
      display: block;
      height: 2px;
      width: 36px;
      background-color: var(--bgBlack100);
      margin-top: 3px;
    }
  }

  }
`;

const NavMenu = styled.nav`
  position: fixed;
  background-color: red;
  padding: 0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  visibility: hidden;

  .nav-menu-inner {
    /* background-color: blue; */
    min-height: 100vh;

    ul {
      background-color: violet;
      padding: 1rem;

      li {
        display: block;
        margin-bottom: 20px;

        &::last-child {
          margin-bottom: 0;
        }

        a {
          display: inline-block;
          font-size: 2.5rem;
        }
      }
    }
  }

  .close-nav-menu {
    height: 40px;
    width: 40px;
    display: block;
    line-height: 35px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid #dddd;
    text-align: center;
    cursor: pointer;
    top: 15px;
    right: 15px;
  }
`;

const Landing = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div className="row space-between">
            <div className="logo">
              <a href="#">AD.</a>
            </div>

            <div className="hamburger-btn">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Header>

      {/* NavMenu */}
      <NavMenu>
        <div className="close-nav-menu">&times;</div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </NavMenu>

      <section className="home-section section">
        <div className="container">
          <div className="row full-screen">
            <div className="home-text">
              <p>Hello</p>
              <h2>I'm Albert Dugba</h2>
              <h1>Frontend Developer</h1>
            </div>

            <div className="home-img">
              <div className="img-box">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--iOYHlV4o--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/23934/e82e4303-0604-40eb-a785-52ad1a40d4f1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
