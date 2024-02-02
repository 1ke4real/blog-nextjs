import {Button, Divider, Flex} from "antd";
import Link from "next/link";


export const Navbar = () => {

    return (
        <nav className="mx-20 my-10">
            <Flex justify="space-between">
                <h2>Pixel Odissey</h2>
                <ul>
                    <Flex gap="middle" vertical={false} align="center">
                        <li><Link href="/toto">Home</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>
                            <Button type="default">
                                Login
                            </Button>
                        </li>
                    </Flex>
                </ul>
            </Flex>
            <Divider />
        </nav>
    );
}