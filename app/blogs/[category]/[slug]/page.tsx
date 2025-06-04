// app/blogs/[category]/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import BackButton from '@/components/BackButton';

export async function generateStaticParams() {
  const POSTS_DIR = path.join(process.cwd(), 'content', 'blogs');
  const categories = fs.readdirSync(POSTS_DIR);

  const paths = [];

  for (const category of categories) {
    const catPath = path.join(POSTS_DIR, category);
    const files = fs.readdirSync(catPath).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      paths.push({
        category,
        slug: file.replace(/\.md$/, ''),
      });
    }
  }

  return paths;
}

export default function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const POSTS_DIR = path.join(process.cwd(), 'content', 'blogs');
  const filePath = path.join(POSTS_DIR, params.category, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    // Not using notFound() directly in layout components
    return <div className="p-6 text-red-500">404 - Blog Not Found</div>;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: markdown } = matter(raw);
  const htmlContent = marked(markdown);

  return (
    <article className="prose mx-auto p-6">
      <BackButton />
      <h1>{frontmatter.title}</h1>
      <time className="text-gray-500">
        {new Date(frontmatter.date).toLocaleDateString()}
      </time>
      {frontmatter.summary && <p className="italic">{frontmatter.summary}</p>}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}
