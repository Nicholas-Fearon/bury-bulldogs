import Link from "next/link"
export default function Nav() {
    return (<>
            <Link href="/">Home</Link>

        <Link href="/about">About Us</Link>
        <Link href="/committee">Committee</Link>
        <Link href="/policies">Policies</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/teams">Our Teams</Link>
        <Link href="/sponsorship">Sponsorship</Link>
        <Link href="/news">News</Link>
        <Link href="/shop">Shop</Link>



    </>)
}