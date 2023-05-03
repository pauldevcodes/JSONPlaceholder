import { useLoaderData } from "react-router-dom"

export const usersLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    return data
}

const Users = () => {
    const data = useLoaderData()
    return (
        <>
            <div className=" grid gap-5">
                {data.map(({ id, name, username, email, address }) => {
                    return (
                        <div key={id} className=" bg-slate-300 rounded-md p-4 flex flex-col gap-y-2">
                            <p className=" text-xl capitalize font-medium">
                               NAME: <span className=" font-normal">{name}</span>
                               <br />
                               USERNAME: <span className=" font-normal">{username}</span>
                               <br />
                               EMAIL: <span className=" font-normal">{email}</span>
                               <br />
                               ADDRESS: <span className=" font-normal">{address.street}, {address.suite}, {address.city}</span>
                               <br />
                               ZIPCODE: <span className=" font-normal">{address.zipcode}</span>
                            </p>

                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Users;