import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import Navbar from '../../components/Navbar'

export const revalidate = 3600

export default async function BlogIndex() {
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    "excerpt": pt::text(body)
  }`)

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#3B30CC]">Our Blog</h1>
        <p className="text-slate-600 mb-12 text-lg">Insights and updates from our team.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post._id} href={`/blogs/${post.slug.current}`} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#3B30CC]/20 transition-all duration-300">
              {post.mainImage ? (
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image src={urlForImage(post.mainImage)} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="h-56 w-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <span className="text-sm rounded-full bg-slate-200 px-4 py-2">No Image</span>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#3B30CC] transition-colors">{post.title}</h2>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.excerpt || "Read more about this topic..."}</p>
                <div className="mt-auto font-medium text-sm text-[#3B30CC] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="col-span-1 border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center">
              <h3 className="text-xl font-medium text-slate-700 mb-2">No posts yet</h3>
              <p className="text-slate-500">Go to the admin portal to publish your first post.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
