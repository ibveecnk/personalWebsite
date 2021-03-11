import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/Posts.component.scss";
const glob = require("glob");

export default function BlogTemplate({ frontmatter, markdownBody }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */

  if (!frontmatter) return <></>;

  return (
    <div>
      <Layout content={content} title={frontmatter.title} />
      <article className={styles.blog}>
        <figure className={styles.blog__hero}>
          <img
            src={frontmatter.hero_image}
            alt={`blog_hero_${frontmatter.title}`}
          />
        </figure>
        <div className={styles.blog__info}>
          <h1>{frontmatter.title}</h1>
          <h3>{reformatDate(frontmatter.date)}</h3>
        </div>
        <div className={styles.blog__body}>
          <ReactMarkdown source={markdownBody} />
        </div>
        <h2 className={styles.blog__footer}>
          Written By: {frontmatter.author}
        </h2>
      </article>
    </div>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/posts/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
