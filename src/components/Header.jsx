import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className=" max-w-screen-lg mx-auto flex items-center justify-between py-5 px-2">
                <div>
                    <Link
                        to="/"
                    >
                        <h1>JSONPlaceholder</h1>
                    </Link>
                </div>

                <nav className=" flex items-center gap-x-6">
                    <Link
                        to="posts"
                    >
                        Posts
                    </Link>
                    <Link
                        to="comments"
                    >
                        Comments
                    </Link>
                    <Link
                        to="albums"
                    >
                        Albums
                    </Link>
                    <Link
                        to="photos"
                    >
                        Photos
                    </Link>
                    <Link
                        to="todos"
                    >
                        Todos
                    </Link>
                    <Link
                        to="users"
                    >
                        Users
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;