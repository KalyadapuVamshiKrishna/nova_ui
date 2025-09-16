type BlogCardProps = {
    title: string;
    description:string;
    date: string;
}

export default function BlogCard({title, description, date}: BlogCardProps){
    return(
    <>
   
    <div className="border p-6 m-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{date}</span>
    </div>

    </>
    )
}