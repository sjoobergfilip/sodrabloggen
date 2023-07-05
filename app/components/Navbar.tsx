import Link from "next/link";
import Image from "next/image";
import RoundLogo from "../../public/logo/sodrabloggen_whitetext.png";
import { BsTiktok, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
const Navbar = () => {
    return (
        <header className='bg-[#0c2309] flex items-center justify-between space-x-2 font-bold px-10 py-5 static'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image
                        className='rounded-full object-cover'
                        height={70}
                        width={70}
                        src={RoundLogo}
                        alt='logo'
                    />
                </Link>
            </div>
            <div className='text-white flex'>
                <div className='md:flex items-center hidden'>
                    <Link
                        className='mr-5 text'
                        target='_blank'
                        href='https://www.instagram.com/sodrabloggen/'
                    >
                        <BsInstagram size='1.5rem' />
                    </Link>
                    <Link
                        className='mr-5'
                        target='_blank'
                        href='https://twitter.com/sodrabloggen'
                    >
                        <BsTwitter size='1.5rem' />
                    </Link>
                    <Link
                        className='mr-5'
                        target='_blank'
                        href='https://www.facebook.com/sodrabloggen'
                    >
                        <BsFacebook size='1.5rem' />
                    </Link>
                </div>
                <div>
                    <Link
                        target='_blank'
                        className='px-4 py-3 text-sm flex items-center border-2 border-white uppercase rounded-full'
                        href='https://printler.com/sv/print-shop/17211-filip-sjoberg/'
                    >
                        Köp poster
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
