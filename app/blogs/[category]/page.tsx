// app/blogs/category/[category]/page.tsx
import { getAllPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';
import BackButton from '@/components/BackButton';

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getAllPosts();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <main className="max-w-5xl mx-auto p-6">
        <BackButton />
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Category: {params.category}
      </h1>
      {filtered.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
