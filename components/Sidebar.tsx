// components/Sidebar.tsx
import Link from 'next/link';

const categories = [
  { name: 'DSA & Algorithms', slug: '/learn/dsa' },
  { name: 'System Design', slug: '/learn/system-design' },
  { name: 'Web Development', slug: '/learn/web-dev' },
  { name: 'Machine Learning', slug: '/learn/ml' },
  { name: 'AI & LLMs', slug: '/learn/ai' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Study Categories</h2>
      <nav className="flex flex-col gap-2">
        {categories.map((category) => (
          <Link key={category.slug} href={category.slug}>
            <a className="text-gray-700 hover:underline">{category.name}</a>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
