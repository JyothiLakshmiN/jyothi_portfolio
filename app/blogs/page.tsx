import { getAllPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function BlogsPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-64 w-full md:h-screen sticky top-0 p-4 border-r overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/blogs/${encodeURIComponent(cat.toLowerCase())}`}
                className="text-blue-600 hover:underline capitalize block"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Blog Cards */}
      <main className="flex-1 p-6 space-y-16">
        {categories.map((category) => {
          const filtered = posts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          );

          return (
            <section
              key={category}
              id={category.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-20"
            >
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
