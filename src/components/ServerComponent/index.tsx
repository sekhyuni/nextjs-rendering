import { promises as fs } from 'fs';

import ClientFirstChildComponent from '../ClientFirstChildComponent';
import ClientSecondChildComponent from '../ClientSecondChildComponent';

const ServerComponent = async () => {
  const response = await fs.readFile(
    `${process.cwd()}/server-data.txt`,
    'utf-8',
  );

  return (
    <div>
      <ClientFirstChildComponent />
      <ClientSecondChildComponent />
      <p>{response}</p>
    </div>
  );
};

export default ServerComponent;
