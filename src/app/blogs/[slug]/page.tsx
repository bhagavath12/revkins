import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'

export const revalidate = 3600 

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { seo, title }`,
    { slug: params.slug }
  )

  return {
    title: post?.seo?.meta_title || post?.title || 'Revkins Blog',
    description: post?.seo?.meta_description || 'Insights from the Revkins team.',
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      seo,
      "authorName": author->name
    }`,
    { slug: params.slug }
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
          {post.body?.map((block: any, i: number) => {
            if (block._type === 'block') {
              return <p key={i} className="mb-6 text-slate-700 leading-relaxed text-lg">{block.children?.map((c: any) => c.text).join('')}</p>
            }
            if (block._type === 'image') {
              return (
                <div key={i} className="my-8 relative h-[400px] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image src={urlForImage(block)} alt="" fill className="object-contain" />
                </div>
              )
            }
            return null
          })}
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
