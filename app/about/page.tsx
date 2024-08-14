import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div>
          Welcome to my blog! I'm Muhammad Umer Siddiqui aka Tails Azimuth, a passionate Next.js
          developer and a proud graduate of the Presidential Initiative for Artificial Intelligence
          & Computing (PIAIC). My journey through PIAIC has fueled my enthusiasm for emerging
          technologies, and now, I'm dedicated to sharing that knowledge with others. This blog is a
          space where I explore and explain the latest trends, tools, and innovations in tech.
          Whether you're a budding developer, a tech enthusiast, or just curious about the digital
          world, you'll find valuable insights and practical advice here. Join me on this exciting
          journey as we delve into the fascinating world of technology together. Let's learn, grow,
          and stay ahead in this ever-evolving field!
        </div>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}
      </AuthorLayout>
    </>
  )
}
