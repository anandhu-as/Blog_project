import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore"; //add document to table

const CreatePost = ({ isAuth }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const postsCollection = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postsCollection, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    }); // the secnd argument is the data that we want to add
    navigate("/");
  };

  useEffect(() => {
    !isAuth && navigate("/login");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div
        className={`max-w-2xl w-full bg-white/90 backdrop-blur-md border-2 border-blue-300 p-6 sm:p-8 rounded-2xl shadow-xl
                    transition-all duration-700 ease-out
                    transform ${
                      show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-10"
                    } hover:shadow-2xl hover:scale-[1.02]`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-6 text-center tracking-wide">
          Create a Post
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
            Title:
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition duration-300 ease-in-out transform hover:scale-105 sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
            Post:
          </label>
          <textarea
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Write your post..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl h-36 sm:h-48 resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition duration-300 ease-in-out transform hover:scale-105 sm:text-base"
          ></textarea>
        </div>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl
                     hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 duration-300
                     text-sm sm:text-base"
          onClick={createPost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
