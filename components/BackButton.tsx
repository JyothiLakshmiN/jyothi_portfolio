'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      ← Back
    </button>
  );
}
