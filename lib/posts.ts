import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

// Get all posts metadata (for homepage listing)
export function getAllPosts() {
  const files = fs.readdirSync(contentDir);

  return files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      ...data,
    };
  });
}

// Get one post content
export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
  };
}
