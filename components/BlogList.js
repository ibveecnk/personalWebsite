import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Moment from "moment";
import styles from "../styles/BlogList.module.scss";

const BlogList = ({ allBlogs }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return Moment(date).format("DD.MM.YYYY HH:MM");
  }

  return (
    <>
      <ul className={styles.list}>
        {allBlogs.length >= 1 ? (
          allBlogs.map((post) => (
            <li>
              <div className={styles.blogInfo}>
                <h2>{post.frontmatter.title}</h2>
                <h3> {reformatDate(post.frontmatter.date)}</h3>
                <p>
                  <ReactMarkdown source={post.markdownBody} />
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </ul>
    </>
  );
};

export default BlogList;
