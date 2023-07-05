import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            author: matterResult.data.author,
            categorys: matterResult.data.categorys,
            description: matterResult.data.description,
            postImage: matterResult.data.postImage,
        };

        // Combine the data with the id
        return blogPost;
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestPost() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            author: matterResult.data.author,
            categorys: matterResult.data.categorys,
            description: matterResult.data.description,
            postImage: matterResult.data.postImage,
        };

        // Combine the data with the id
        return blogPost;
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        author: matterResult.data.author,
        categorys: matterResult.data.categorys,
        description: matterResult.data.description,
        postImage: matterResult.data.postImage,
        contentHtml,
    };

    // Combine the data with the id
    return blogPostWithHTML;
}
