import Head from "next/head";
import { useEffect, useState } from "react";
import { getPosts } from "../services/post";
import Link from "next/link";
import { briefContent } from "../utils";

const PostsRenderer = ({ data = [] }) => {
  return data.map((item) => (
    <Link href={`/blog/${item.node.id}`}>
      <a className="text-left border rounded-xl overflow-hidden">
        <div className="h-64">
          <img
            src={item.node.featuredImage.node.mediaItemUrl}
            alt={item.node.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold">{item.node.title}</h3>
          <p className="mt-4 text-xl">{briefContent(item.node.content, 200)}</p>
        </div>
      </a>
    </Link>
  ));
};

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result.data.data.posts.edges);
    });
  }, [setPosts]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Haidzet Senior Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://haidzet.com">
            Haidzet
          </a>
        </h1>

        <p className="mt-3 text-2xl">Demo nextjs page connect to wordpress</p>

        <div className="grid grid-cols-2 pb-20 gap-x-10 gap-y-6 items-center justify-around max-w-4xl mt-8 sm:w-full">
          <PostsRenderer data={posts} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by vnsharetech
        </a>
      </footer>
    </div>
  );
}
