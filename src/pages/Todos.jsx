import { useLoaderData } from "react-router-dom"

export const todosLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    console.log(data)
    return data
}

const Todos = () => {
    const data = useLoaderData()
    return (
        <>
            <div className=" grid grid-cols-3 gap-5">
                {data.map(({ id, title, completed }) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-2">
                            <h3 className=" text-xl capitalize">
                                Title: {title}
                            </h3>
                            <p className="text-slate-600">
                                Completed: {completed}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Todos;