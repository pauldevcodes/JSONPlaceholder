import { useLoaderData } from "react-router-dom"

export const photosLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    console.log(data)
    return data
}

const Photos = () => {
    const data = useLoaderData()
    return (
        <>
            <div className=" grid grid-cols-3 gap-5">
                {data.map(({ id, title, url }) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-5">
                            <img src={url} alt="" />
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

export default Photos;