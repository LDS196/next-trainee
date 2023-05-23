import Link from "next/link";


export const Header = () => {
    return (
        <header
            style={{
                display: "flex",
                gap: "0 25px",
                height: "50px",
                backgroundColor: "green",
                alignItems: "center",
            }}
        >
            <Link href={"/"}>Home</Link>
            <Link href={"/posts"}>Posts</Link>
            <Link href={"/products"}>Products</Link>
        </header>
    );
};

