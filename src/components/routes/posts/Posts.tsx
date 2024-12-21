import { Link } from '@tanstack/react-router';

type PostComponentProps = {
  posts: string[];
};

const PostComponent = ({ posts }: PostComponentProps) => {
  return (
    <div>
      <h1 className="mb-6 text-2xl">Posts</h1>
      {posts.map((post) => (
        <div key={post}>
          <Link
            to="/posts/$postId"
            params={{
              postId: post,
            }}
          >
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
