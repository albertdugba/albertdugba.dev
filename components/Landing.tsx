import BigCirle from 'styles/Icons/big-cirlce';
import CircleOutline from 'styles/Icons/circle-outline';
import Dots from 'styles/Icons/dots';
import Fing from 'styles/Icons/fing';
import I from 'styles/Icons/i';
import Rect from 'styles/Icons/rect';
import Triange from 'styles/Icons/triangle';
import ZigZag from 'styles/Icons/zigzag';
import { Home } from './Section/Home/Home';
import styled from 'styled-components';

const Landing = ({ posts, works }) => {
  return (
    <Wrapper>
      <div className='profile'>
        <img
          src='https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-0/p526x296/199548180_4843198325707173_1589442917293810159_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGOemwec3Sm0Ilhp_BE4-jSkBJ2qBLkopmQEnaoEuSimbwybb5za71pusO-YCw3CjkN7XuTtpgZsBKaueOuO4eC&_nc_ohc=lf6fKinu5m4AX9S899g&tn=y1hXR3x2ilqp3-Fs&_nc_ht=scontent.facc6-1.fna&tp=6&oh=e5f7ad5db1dc9a9e793d4a321cd21fbe&oe=60DEDB9E'
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />

        <p>
          Hi <span role='img'>👋</span>
          <br />
          My name is Albert Dugba, a self taught engineer from Ghana with 2+
          years
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: var(--primaryColor);

  .profile {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 90%;
    min-height: 50%;
    background: #fff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    margin-top: 50px;
    position: relative;

    img {
      position: absolute;
      top: -80px;
    }

    p,
    span {
      display: flex;
      text-align: center;
    }

    @media (min-width: 801px) {
      max-width: 40%;
    }
  }
`;

export default Landing;
