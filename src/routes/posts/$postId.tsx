import Post from '@/components/routes/posts/Post';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: PostItem,
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
  pendingComponent: () => <div>Loading...</div>,
});

function PostItem() {
  return <Post />;
}
