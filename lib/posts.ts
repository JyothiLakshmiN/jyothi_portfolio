import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked' // or use remark

const postsDirectory = path.join(process.cwd(), 'content/blogs')
export function getAllPosts() {
  const categories = fs.readdirSync(postsDirectory).filter((dir) =>
    fs.statSync(path.join(postsDirectory, dir)).isDirectory()
  )

  const posts = categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category)
    const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.md'))

    return files.map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(categoryPath, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: frontmatter, content } = matter(fileContents)

      return {
        slug,
        category,
        frontmatter: {
          ...frontmatter,
          date: frontmatter.date ?? null, // prevent hydration error if undefined
        },
        content,
      }
    })
  })

  // Sort safely, handling missing dates
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date ?? 0).getTime()
    const dateB = new Date(b.frontmatter.date ?? 0).getTime()
    return dateB - dateA
  })
}
export function getPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      frontmatter: data,
      slug: filename.replace('.md', ''),
    }
  })
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map((file) => file.replace('.md', ''))
}


export function getPostBySlug(slug: string) {
  const categories = fs.readdirSync(postsDirectory)

  for (const category of categories) {
    const filePath = path.join(postsDirectory, category, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const htmlContent = marked(content) // or use remark for more advanced rendering

      return {
        slug,
        category,
        frontmatter: data,
        content: htmlContent,
      }
    }
  }

  return null
}