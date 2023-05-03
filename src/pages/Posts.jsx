import { useLoaderData } from "react-router-dom";

export const postLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data)
    return data
}

const Posts = () => {
    const data = useLoaderData();
    return (
        <>
            <div className=" grid grid-cols-3 gap-5">
                {data.map(({ id, title, body }) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-2">
                            <h3 className=" text-xl capitalize">
                                {title}
                            </h3>
                            <p className=" text-sm text-opacity-50">
                                {body}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Posts;