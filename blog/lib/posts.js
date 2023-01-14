import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { serialize } from "next-mdx-remote/serialize";
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  // 두 가지의 파일 이름들을 모두 불러왔을 것
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$|\.mdx$/, "");

    // Read markdown file as string
    // root 에서 pre-rendering.md 까지 만드는 것이 fullPath
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    // 상단에 있는 meta 정보들 만을 읽을 것이라는 의미
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$|\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullMdPath = path.join(postsDirectory, `${id}.md`);
  const mdExist = fs.existsSync(fullMdPath);

  if (mdExist) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } else {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const mdxSource = await serialize(matterResult.content);

    return {
      id,
      mdxSource,
      ...matterResult.data,
    };
  }
}

export async function createPost({ id, title, date, content }) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const data = `---
  title: '${title}'
  date: '${date}'
  ---
  
  ${content}
  `;

  fs.writeFileSync(fullPath, data);
}
