import { useLoaderData } from "react-router-dom";

export const commentsLoader = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data)
    return data
}

const Comments = () => {
    const data = useLoaderData()
    return (
        <>
            <div className=" grid grid-cols-3 gap-5">
                {data.map(({id, name, email, body}) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-2">
                            <p className=" text-xl capitalize">
                                {name}
                            </p>
                            <p className=" text-slate-600">
                                {email}
                            </p>
                            <p className=" text-sm opacity-50">
                                {body}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Comments;