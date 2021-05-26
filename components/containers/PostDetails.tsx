import styled from 'styled-components';
import Image from 'next/image';

const PostDetails = ({ coverImage, title, content }) => {
  return (
    <Wrapper>
      <div>
        <img
          src={coverImage.url}
          alt={title}
          style={{
            height: 'auto',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="container">
          <h1>{title}</h1>
          <p>{content.markdown}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostDetails;

/**
 * @styles
 */

const Wrapper = styled.div``;
