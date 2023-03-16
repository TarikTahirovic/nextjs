import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            {
              hello,
              name,
              age,
              placeOfBirth
            }
          `,
        }),
      });
      const json = await response.json();
      setData(json.data);
    }
    fetchData().then((r) => r);
  }, []);

  return (
    <Layout>
      {data && (
        <>
          <p>Hello {data.name}! WELCOME</p>
          <p>Age: {data.age}</p>
          <p>Place of Birth: {data.placeOfBirth}</p>
        </>
      )}
    </Layout>
  );
}

export default Profile;
