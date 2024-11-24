import APIKeyTable from '@/app/(home)/api-keys/_components/APIKeyTable';
import { APIKey } from '@/app/(home)/api-keys/page';

type APIKeysPageProps = {
  apiKeys: APIKey[];
};

export default function APIKeysPage({ apiKeys }: APIKeysPageProps) {
  return (
    <>
      <p>
        Manage your API keys. Remember to keep your API keys safe to prevent
        unauthorized access.
      </p>
      <APIKeyTable apiKeys={apiKeys} />
    </>
  );
}