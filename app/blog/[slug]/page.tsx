import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/posts";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-6">{post.date}</p>

      {/* Render parsed Markdown as HTML */}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
