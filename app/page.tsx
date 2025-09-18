import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

  
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 text-center shadow-md">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Welcome to My Blog
          </h2>
          <p className="mt-6 text-lg text-purple-100">
            Sharing ideas, tutorials, and thoughts to help you grow 🚀
          </p>
        </div>
      </section>

     
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-10 text-gray-800 border-b-4 border-indigo-500 inline-block">
          Latest Posts
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
