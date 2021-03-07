import styles from "../styles/Title.module.scss";

function Title({ text }) {
  return (
    <div className="tWrapper">
      <h1 className="title">{text ? text : ""}</h1>
    </div>
  );
}

export default Title;
