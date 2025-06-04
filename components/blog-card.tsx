"use client"

import Link from "next/link"

export default function BlogCard({ blog, category }: { blog: any; category: string }) {
  return (
    <Link href={`/blogs/${category}/${blog.slug}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-sm text-gray-400">{new Date(blog.date).toDateString()}</p>
      </div>
    </Link>
  )
}
