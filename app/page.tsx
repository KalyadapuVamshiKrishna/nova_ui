import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Welcome to My Blog</h2>
        <p className="mt-4 text-lg">Sharing ideas, tutorials, and thoughts 🚀</p>
      </section>

      <main className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Latest Posts</h3>
        <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post: any) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
      </main>
    </div>
  );
}
