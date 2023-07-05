import { ImageConfigComplete } from "next/dist/shared/lib/image-config";

type BlogPost = {
    id: string;
    title: string;
    date: string;
    author: Author;
    postImage: string;
    categorys: Array;
    description: string;
    contentHtml?: string;
};

type Author = {
    name: string;
    twitterName: string;
    twitterLink: string;
    image: string;
};
