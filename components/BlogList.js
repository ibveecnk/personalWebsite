import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Moment from "moment";
import styles from "../styles/BlogList.module.scss";

const BlogList = ({ allBlogs }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return Moment(date).format("DD.MM.YYYY hh:mm");
  }

  console.log(allBlogs);
  return (
    <>
      <ul className="list">
        {allBlogs.length >= 1 ? (
          allBlogs.map((post) => (
            <Link key={post.slug} href={{ pathname: `/posts/${post.slug}` }}>
              <li>
                <div className="blog__info">
                  <h2>{post.frontmatter.title}</h2>
                  <h3> {reformatDate(post.frontmatter.date)}</h3>
                  <p>
                    <ReactMarkdown source={post.markdownBody} />
                  </p>
                </div>
              </li>
            </Link>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </ul>
    </>
  );
};

export default BlogList;
