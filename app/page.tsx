import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <section  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 text-center">
    <h1> Welcome To My Blog</h1>
    <p>Sharing ideas, tutorials and thoughts</p>
   </section>
   
   <main className="p-8">
    <h3>Latest Posts</h3>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <BlogCard title="First Post" description="This is the description of the first post." date="2024-10-01" slug="first-post"/>
    <BlogCard title="Second Post" description="This is the description of the second post." date="2024-10-05" slug="second-post"/>
    <BlogCard title="Third Post" description="This is the description of the third post." date="2024-10-10" slug="third-post"/>
    </div>
   </main>

   </>
  );
}
