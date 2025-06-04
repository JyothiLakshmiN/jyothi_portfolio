import Link from 'next/link';
import { formattedDate } from '../lib/utils';

interface BlogCardProps {
  post: {
    content: string;
    date: string;
    slug: string;
    category: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, category, content, frontmatter } = post;

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full">
      {/* Category Badge and Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 uppercase font-medium">
          {category}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {formattedDate(frontmatter.date)}
        </span>
      </div>

      {/* Blog Title */}
      <Link href={`/blogs/${category}/${slug}`} legacyBehavior>
        <a className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-2 line-clamp-2">
          {frontmatter.title}
        </a>
      </Link>

      {/* Summary */}
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow line-clamp-3">
        {content}
      </p>

      {/* Read More */}
      <Link href={`/blogs/${category}/${slug}`} legacyBehavior>
        <a className="text-sm text-blue-500 dark:text-blue-400 hover:underline mt-4 inline-block">
          Read more →
        </a>
      </Link>
    </div>
  );
}
