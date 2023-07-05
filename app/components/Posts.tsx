import { getSortedPostsData } from "@/lib/post";
import React from "react";
import BlogListItem from "./BlogListItem";

const Posts = () => {
    const allPosts = getSortedPostsData();
    const posts = allPosts.slice(1);
    return (
        <section className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:gap-x-10 md:gap-y-16 md:px-10 pb-24 md:grid-cols-2'>
                {posts.map((post) => (
                    <BlogListItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Posts;
