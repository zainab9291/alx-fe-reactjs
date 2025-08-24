import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent.jsx';

const queryClient = new QueryClient();

export default function App() {
  const [tab, setTab] = useState('home'); // home | posts

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">React Query Demo</h1>

        <div className="flex gap-3 justify-center mb-6">
          <button
            onClick={() => setTab('home')}
            className={`px-4 py-2 rounded ${tab === 'home' ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => setTab('posts')}
            className={`px-4 py-2 rounded ${tab === 'posts' ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            Posts
          </button>
        </div>

        {tab === 'home' && (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
            <p className="text-gray-700">
              اضغطي على تبويب <b>Posts</b> عشان تجيبي البيانات من JSONPlaceholder. ارجعي لـ Home وبعدين لـ Posts تاني
              ولاحظي إن البيانات بتظهر فورًا من الكاش (طالما ضمن فترة الـ stale).
            </p>
          </div>
        )}

        {tab === 'posts' && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}