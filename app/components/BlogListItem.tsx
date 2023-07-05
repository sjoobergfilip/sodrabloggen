import React from "react";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";
import { BlogPost } from "@/types";

type Props = {
    post: BlogPost;
};

const BlogListItem = ({ post }: Props) => {
    const { id, title, date, author, description, categorys, postImage } = post;

    return (
        <Link href={`/nyhet/${id}`}>
            <div className='relative h-80 w-full'>
                <img
                    className='w-full h-full object-cover object-left lg:object-center'
                    src={postImage}
                ></img>
            </div>
            <div className='mt-5 flex-1 px-10 pb-16 md:pb-0'>
                <div className='flex'>
                    <div className='flex flex-col items-end mr-3'>
                        <h3 className='font-bold text-2xl text-[#C79433] leading-none'>
                            {new Date(date)
                                .toLocaleDateString("sv", { day: "numeric" })
                                .split(".")
                                .join("")}
                        </h3>
                        <h3 className='font-bold text-2xl uppercase text-right text-[#C79433]'>
                            {new Date(date)
                                .toLocaleDateString("sv", { month: "short" })
                                .split(".")
                                .join("")}
                        </h3>
                    </div>

                    <h3 className='uppercase font-bold text-2xl mr-4 leading-none'>
                        {title}
                    </h3>
                </div>
                <div className='flex items-center space-x-2 mb-4'>
                    {categorys.map((category: any) => (
                        <p className='mt-4 rounded-full bg-[#0C2309] px-3 py-1 text-sm uppercase text-white'>
                            {category}
                        </p>
                    ))}
                </div>
                <p className='text-gray-500 line-clamp-5 italic'>
                    {description}
                </p>
                <div className='flex justify-between pt-10'>
                    <div className='flex justify-center items-center'>
                        <img
                            className='h-10 w-10 rounded-full mr-3'
                            src={author.image}
                            alt={author.name}
                            width={40}
                            height={40}
                        ></img>
                        <p className='text-gray-500 line-clamp-2'>
                            {author.twitterName}
                        </p>
                    </div>
                    <div className='text-3xl text-[#C79433]'>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogListItem;
