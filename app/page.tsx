// src/app/page.tsx
import pool from '@/lib/db';

export default async function Home() {
  let dbTime = null;
  let error = null;

  try {
    // We are querying the database directly from the server component
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    dbTime = result.rows[0].now.toString();
    client.release();
  } catch (err) {
    console.error(err);
    error = "Failed to connect to the database.";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Database Connection Test</h1>
        
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-bold">Success!</p>
            <p>The current database time is: {dbTime}</p>
          </div>
        )}
      </div>
    </main>
  );
}