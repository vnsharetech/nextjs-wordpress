import { getPostDetail } from "../../services/post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    if (id) {
      getPostDetail(id).then((result) => {
        if (result.data.data.post) setPost(result.data.data.post);
      });
    }
  }, [setPost, id]);

  return (
    <div>
      <Head>
        <title>Haidzet Senior Developer Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-6 text-center relative">
        <Link href="/">
          <a className="absolute top-6 left-8">Back</a>
        </Link>
        <h1 className="text-6xl font-bold">{post.title}</h1>
        {post.featuredImage && (
          <img
            src={post.featuredImage.node.mediaItemUrl}
            width="500"
            className="inline mt-4"
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="mt-8"
        ></div>
      </div>
    </div>
  );
};

export default BlogDetail;
