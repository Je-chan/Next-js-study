import Layout from "../../components/Layout";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const [showLink, setShowLink] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("fetch Error");
        })
        .then((data) => {
          setShowLink(true);
          alert(data.msg);
        })
        .catch((err) => alert(`request error: ${err}`));
    }
  };
  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={onHandleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <input type="submit" value="Create" />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>
          <p>Created Post</p>
        </Link>
      )}
    </Layout>
  );
}
