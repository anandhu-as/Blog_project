import React, { useEffect, useState } from "react";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../Firebase/firebase";

const Home = ({ isAuth }) => {
  const [postList, setPostlist] = useState([]);
  const [mounted, setMounted] = useState(false);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setMounted(true);
    };
    getPosts();
  }, []);
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    const data = await getDocs(postsCollection);
    setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <div className="min-h-screen  from-indigo-50 via-white to-pink-50 px-4 py-10">
      <h1
        className={`text-4xl font-extrabold text-center mb-10 text-blue-300
        transition-all duration-700
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Latest Posts
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {postList.map((post, index) => (
          <div
            key={post.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`group relative bg-white/70 backdrop-blur-xl
            rounded-2xl border border-white/60 shadow-lg p-6
            transition-all duration-700 ease-out
            hover:shadow-2xl hover:-translate-y-2 cursor-pointer
            ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 to-pink-400 opacity-0 blur-xl group-hover:opacity-20 transition duration-500 -z-10"></div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-400 transition">
              {post.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              {post.postText}
            </p>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 bg-indigo-50 px-3 py-1 rounded-full">
                ✍️ {post.author?.name}
              </span>
              {isAuth && post.author?.id === auth.currentUser?.uid && (
                <button
                  onClick={() => deletePost(post.id)}
                  className="deleteButton"
                  aria-label="Delete post"
                >
                  ❌
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
