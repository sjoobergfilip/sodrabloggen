import { getPostData } from "@/lib/post";
import { ImageResponse } from "next/server";

export const size = {
    with: 900,
    height: 450,
};

export const contentType = "image/jpg";

interface Props {
    params: {
        postId: string;
    };
}

export default async function og({ params }: Props) {
    const post = await getPostData(params.postId);

    console.log(post.postImage);

    return new ImageResponse(
        (
            <div tw='relative flex items-center justify-center'>
                <img src={post.postImage} alt={post.title} />
            </div>
        ),
        size
    );
}
