// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 30, // 30 seconds
      refetchOnWindowFocus: false, // ما يعيدش الفيتش لما نرجع للنافذة
      keepPreviousData: true, // يسيب البيانات القديمة لحد ما الجديدة توصل
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2 border-b pb-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;