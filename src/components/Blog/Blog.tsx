import ReactMarkdown from "react-markdown";

const Blog = (props: any) => {
    let title: string = props.title;
    let author: string = props.author;
    let date: string = props.date;
    let description: string = props.description;
    let image: string = props.image;

    return (
        <>
            {/* Card Blog */}
            <div className="relative  p-4 pb-0 bg-white border border-gray-200 rounded-lg shadow-md">
                {/* Ảnh */}
                <img src={image} alt="Blog" className={"w-full h-40 object-contain mb-4"}/>
                {/* Title */}
                <span className={"font-bold"}>{title}</span>
                {/* Author */}
                <div >
                    <span className={"text-gray-700 text-sm uppercase mb-1"}>{author} - </span>
                    <span className={"text-gray-400 text-sm font-semibold mb-2"}>{date}</span>
                </div>

                {/* Chi tiet */}
                <ReactMarkdown className={"text-gray-800 text-base font-semibold mb-2 line-clamp-2"}>
                {description}
                </ReactMarkdown>
            </div>
        </>
    )
}
export default Blog;