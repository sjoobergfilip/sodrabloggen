import { getPostData } from "@/lib/post";
import { ImageResponse } from "next/server";

export const size = {
    with: 900,
    height: 450,
};

export const contentType = "image/png";

interface Props {
    params: {
        postId: string;
    };
}

export default async function og({ params }: Props) {
    const post = await getPostData(params.postId);

    return new ImageResponse(
        (
            <div tw='relative flex items-center justify-center'>
                <img
                    src={`https://www.sodrabloggen.se/${post?.postImage}`}
                    alt={post?.title}
                />
            </div>
        ),
        size
    );
}
