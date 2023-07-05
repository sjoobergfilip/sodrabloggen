import { getPostData, getSortedPostsData } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postId: post.id,
    }));
}

export function generateMetaData({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: "Not Found",
        };
    }

    return {
        title: post.title,
    };
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) {
        return notFound();
    }

    const {
        id,
        title,
        date,
        author,
        description,
        categorys,
        postImage,
        contentHtml,
    } = await getPostData(postId);

    return (
        <article>
            {/* Header */}
            <section>
                <div className='w-full bg-[#0C2309] h-56'></div>
                <div className='flex flex-col justify-center max-w-5xl mx-auto h-96 padding-ofest'>
                    <Link
                        className='text-center mb-4 text-[#fff] uppercase text-lg font-bold'
                        href='/'
                    >
                        Tillbaka till alla nyheter
                    </Link>
                    <img
                        className='w-full h-5/6 object-cover'
                        src={postImage}
                        alt={title}
                    />
                </div>
            </section>
            {/* Content */}
            <section className=' max-w-4xl mx-auto mb-16 artical'>
                <div className='mb-12'>
                    <h1 className='uppercase font-bold text-5xl mt-4 leading-none'>
                        {title}
                    </h1>
                    <h3 className='font-bold text-xl text-[#C79433]'>
                        {new Date(date).toLocaleDateString("sv", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </h3>
                    <div className='flex items-center mt-4'>
                        <img
                            className='h-10 w-10 rounded-full mr-3'
                            src={author.image}
                            alt={author.name}
                            width={40}
                            height={40}
                        ></img>
                        <Link
                            target='_blank'
                            href={author.twitterLink}
                            className='line-clamp-2'
                        >
                            {author.twitterName}
                        </Link>
                    </div>
                </div>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </section>
        </article>
    );
}
