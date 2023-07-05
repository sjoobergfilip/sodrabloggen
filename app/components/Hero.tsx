import { getLatestPost } from "@/lib/post";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
    const latestPost = getLatestPost();

    return (
        <div className='relative w-full banner custom-min-height mb-12'>
            <Image
                className='object-cover w-full h-full'
                src={latestPost.postImage}
                alt={latestPost.title}
                width={1000}
                height={1000}
            ></Image>
            <div className='absolute bottom-0 w-full h-full flex justify-between rounded p-7 text-white drop-shadow-lg bg-gradient-to-t from-black via-transparent to-transparent'>
                <div className='flex justify-end h-full max-w-lg flex-col pb-7'>
                    <div className='flex'>
                        <h3 className='uppercase pb-7 font-bold text-3xl md:text-5xl text-[#C79433] text-right mr-4 '>
                            {new Date(latestPost.date).toLocaleDateString(
                                "sv",
                                {
                                    day: "numeric",
                                    month: "short",
                                }
                            )}
                        </h3>
                        <Link
                            key={latestPost.id}
                            href={`/nyhet/${latestPost.id}`}
                        >
                            <h3 className='uppercase pb-7 font-bold text-3xl md:text-5xl'>
                                {latestPost.title}
                            </h3>
                            <div className='hidden md:inline'>
                                <p className='text-sm italic ml-2'>
                                    {latestPost.description}
                                </p>
                                <div className='flex justify-between italic ml-2 mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            className='h-10 w-10 rounded-full mr-3'
                                            src={latestPost.author.image}
                                            alt={latestPost.author.name}
                                            width={40}
                                            height={40}
                                        ></Image>
                                        <p className='text-gray-300 line-clamp-2'>
                                            {latestPost.author.twitterName}
                                        </p>
                                    </div>
                                    <div className='text-3xl text-[#C79433]'>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link key={latestPost.id} href={`/nyhet/${latestPost.id}`}>
                        <div className='md:hidden'>
                            <p className='text-sm italic ml-2'>
                                {latestPost.description}
                            </p>
                            <div className='flex justify-between italic ml-2 mt-4'>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        className='h-10 w-10 rounded-full mr-3'
                                        src={latestPost.author.image}
                                        alt={latestPost.author.name}
                                        width={40}
                                        height={40}
                                    ></Image>
                                    <p className='text-gray-300 line-clamp-2'>
                                        {latestPost.author.twitterName}
                                    </p>
                                </div>
                                <div className='text-3xl text-[#C79433]'>
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
