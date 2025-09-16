import { notFound } from "next/navigation";

const posts=[
    { slug: "first-post", title: "My First Post", content: "This is the content of my first post." },
    { slug: "second-post", title: "My Second Post", content: "This is the content of my second post." },
    { slug: "third-post", title: "My Third Post", content: "This is the content of my third post." },

]


export default function BlogPost({params}:{params:{slug:string}}){
    const post = posts.find(post=>post.slug === params.slug);

    if(!post) return notFound();

    return(
        <div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            
        </div>
    )
}