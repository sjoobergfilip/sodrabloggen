import Image from "next/image";
import Link from "next/link";
import RoundLogo from "../../public/logo/sodrabloggen_whitetext.png";
import { BsTiktok, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#0C2309] flex w-full justify-center text-white '>
            <div className='flex mt-4 items-center justify-center flex-col max-w-sm'>
                <Image
                    className='rounded-full object-cover'
                    height={100}
                    width={100}
                    src={RoundLogo}
                    alt='logo'
                />
                <p className='text-white font-thin'>
                    För Södraiter av södraiter
                </p>
                <div className='mt-4'>
                    <div className='flex text-white'>
                        <div className='flex items-center'>
                            <Link
                                className='mr-4 text border-[1px] border-white p-2 rounded-full'
                                target='_blank'
                                href='https://www.instagram.com/sodrabloggen/'
                            >
                                <BsInstagram size='1.3rem' />
                            </Link>
                            <Link
                                className='mr-4 text border-[1px] border-white p-2 rounded-full'
                                target='_blank'
                                href='https://twitter.com/sodrabloggen'
                            >
                                <BsTwitter size='1.3rem' />
                            </Link>
                            <Link
                                className='mr-4 text border-[1px] border-white p-2 rounded-full'
                                target='_blank'
                                href='https://www.facebook.com/sodrabloggen'
                            >
                                <BsFacebook size='1.3rem' />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-4 text-sm italic mb-6'>
                    Har du frågor eller funderingar eller vill vara en del av
                    Södrabloggen hör av dig till oss via sociala medier eller
                    maila{" "}
                    <a
                        className='text-[#C69433]'
                        href='mailto:info@sodrabloggen.se'
                    >
                        info@sodrabloggen.se
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
