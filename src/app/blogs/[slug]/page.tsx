import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import { PortableText } from '@portabletext/react'

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 relative h-[400px] w-full rounded-xl overflow-hidden bg-slate-100">
          <Image src={urlForImage(value)} alt="" fill className="object-contain" />
        </div>
      )
    }
  },
  marks: {
    textLarge: ({ children }: any) => <span className="text-2xl font-medium leading-snug">{children}</span>,
    textHuge: ({ children }: any) => <span className="text-4xl md:text-5xl font-bold leading-tight">{children}</span>,
    fontSerif: ({ children }: any) => <span className="font-serif italic">{children}</span>,
    fontMono: ({ children }: any) => <span className="font-mono bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-sm text-[#3B30CC]">{children}</span>,
  }
}

export const revalidate = 3600 

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { seo, title }`,
    { slug: resolvedParams.slug }
  )

  return {
    title: post?.seo?.meta_title || post?.title || 'Revkins Blog',
    description: post?.seo?.meta_description || 'Insights from the Revkins team.',
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      seo,
      "authorName": author->name
    }`,
    { slug: resolvedParams.slug }
  )

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 py-32">
        {post.mainImage && (
          <div className="relative h-[400px] md:h-[500px] w-full mb-12 rounded-2xl overflow-hidden bg-slate-100 shadow-md">
            <Image src={urlForImage(post.mainImage)} priority alt={post.title} fill className="object-cover" />
          </div>
        )}
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            {post.title}
          </h1>
          {post.authorName && (
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                {post.authorName.charAt(0)}
              </div>
              <p className="text-slate-600 font-medium">{post.authorName}</p>
            </div>
          )}
        </div>
        
        <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-[#3B30CC] hover:prose-a:text-[#2f26a8] prose-img:rounded-xl">
          {post.body ? <PortableText value={post.body} components={components} /> : null}
        </div>
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`)
  return posts.map((post: any) => ({
    slug: post.slug?.current || '',
  })).filter((p: any) => p.slug !== '')
}
