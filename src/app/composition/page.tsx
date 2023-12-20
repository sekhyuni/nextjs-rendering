import ClientComponentWithChildren from '@/components/ClientComponentWithChildren';
import ServerComponent from '@/components/ServerComponent';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ClientComponentWithChildren>
      <ServerComponent />
    </ClientComponentWithChildren>
  );
}
