import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
    dataUpdatedAt,
  } = useQuery(['posts'], fetchPosts, {
    // البيانات تعتبر "طازة" لمدة دقيقة؛ الرجوع للكومبوننت خلال الدقيقة دي يعرض من الكاش بدون طلب جديد
    staleTime: 60 * 1000,
    // احتفظ بالبيانات في الكاش لمدة 5 دقائق بعد عدم استخدامها
    cacheTime: 5 * 60 * 1000,
    // بلاش تجيب بيانات تلقائي عند تركيز النافذة عشان التجربة تبان
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <p className="text-gray-700">Loading posts…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <p className="text-red-600">Error: {error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            Last updated: <b>{lastUpdated}</b>
          </span>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing…' : 'Refetch'}
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {data.slice(0, 20).map((post) => (
          <li key={post.id} className="p-4 border rounded hover:bg-gray-50 transition">
            <h3 className="font-semibold mb-1">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}