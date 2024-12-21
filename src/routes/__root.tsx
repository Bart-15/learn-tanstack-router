import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link
          to="/posts"
          className="[&.active]:font-bold"
          search={{
            q: 'post1',
          }}
        >
          Posts
        </Link>
      </div>
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
