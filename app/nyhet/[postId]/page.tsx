import { getPostData, getSortedPostsData } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/nyhet/${postId}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: "Södrabloggen",
      images: [
        {
          url: `https://www.sodrabloggen.se/${post.postImage}`,
          alt: post.description,
        },
      ],
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      cardType: "summary_large_image",
      site: "@sodrabloggen",
      title: post.title,
      description: post.description,
      image: `https://www.sodrabloggen.se/${post.postImage}`,
    },
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, author, postImage, contentHtml, categorys } =
    await getPostData(postId);

  return (
    <article>
      {/* Header */}
      <section>
        <div className="w-full bg-[#0C2309] h-56"></div>
        <div className="flex flex-col justify-center max-w-5xl mx-auto h-96 padding-ofest">
          <Link
            className="text-center mb-4 text-[#fff] uppercase text-lg font-bold"
            href="/"
          >
            Tillbaka till alla nyheter
          </Link>
          <Image
            className="w-full h-5/6 object-cover"
            src={postImage}
            alt={title}
            width={600}
            height={600}
          />
        </div>
      </section>
      {/* Content */}
      <section className=" max-w-3xl mx-auto mb-16 artical px-10 md:px-3">
        <div className="mb-7">
          <h1 className="hyphens-auto break-words uppercase font-bold text-4xl md:text-5xl mt-4 leading-none">
            {title}
          </h1>
          <h3 className="datefont-bold text-xl text-[#C79433]">
            {new Date(date).toLocaleDateString("sv", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
          <div className="flex items-center mt-4">
            <Image
              className="h-10 w-10 rounded-full mr-3"
              src={author.image}
              alt={author.name}
              width={40}
              height={40}
            ></Image>
            <Link
              target="_blank"
              href={author.twitterLink}
              className="line-clamp-2"
            >
              {author.twitterName}
            </Link>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            {categorys.map((category: any) => (
              <p
                key={category}
                className="mt-4 rounded-full bg-[#0C2309] px-3 py-1 text-sm uppercase text-white"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </article>
  );
}
