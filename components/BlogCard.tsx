import Link from "next/link";

type BlogCardProps = {
    title: string;
    description:string;
    date: string;
    slug?: string;
}

export default function BlogCard({title, description, date, slug}: BlogCardProps){
    return(
    <>
   <Link href={`/blog/${slug}`}>
    <div className="border p-6 m-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{date}</span>
    </div>
    </Link>

    </>
    )
}