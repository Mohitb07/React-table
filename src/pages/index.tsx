import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title="React Table"
          description=""
        />
      }
    >
      <div>
        <h1>Index page</h1>
      </div>
    </Main>
  );
}
