import styled from 'styled-components';

const PostDetails = ({ coverImage, title, content }) => {
  return (
    <Wrapper className="container">
      <img src={coverImage.url} />
      <p>{title}</p>
      <p>{content.text}</p>
    </Wrapper>
  );
};

export default PostDetails;

/**
 * @styles
 */

const Wrapper = styled.div`
  margin-top: 100px;
`;
