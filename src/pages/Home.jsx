const Home = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center h-screen">
                <div className=" flex flex-col gap-y-6">
                    <h1 className=" text-8xl">
                        JSON Placeholder
                    </h1>
                    <p className=" text-2xl">
                        Free fake API for testing and prototyping.
                    </p>
                    <p className=" text-2xl">
                        Powered by JSON Server + LowDB. Tested with XV.
                    </p>
                    <span>
                        Serving ~2 billion requests each month.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;