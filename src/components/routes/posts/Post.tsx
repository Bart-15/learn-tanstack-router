import { useMatch } from '@tanstack/react-router';

const Post = () => {
  const {
    params: { postId },
  } = useMatch({
    from: '/posts/$postId',
  });

  return <p>Post - {postId}</p>;
};

export default Post;
