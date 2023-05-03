import { useLoaderData } from "react-router-dom"

export const albumsLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    console.log(data)
    return data
}

const Albums = () => {
    const data = useLoaderData()
    return (
        <>
            <div className=" grid grid-cols-3 gap-5">
                {data.map(({ id, title }) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-2">
                            <h3 className=" text-xl capitalize">
                                {title}
                            </h3>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Albums;