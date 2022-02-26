import Layout from "../components/Layout";
import { useState } from "react";
import Input from "../components/Input";

const Upload = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [url, setUrl] = useState();
  const [image, setImage] = useState();
  const [text, setText] = useState();
  console.log(title, date, url, text);

  return (
    <Layout>
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow">
        <div className="mb-6 text-3xl font-light text-center text-gray-800">
          投稿する
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="タイトル"
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="日付"
                onChange={e => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="URL"
                onChange={e => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700">
              <textarea
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="今日何があった？"
                rows="5"
                cols="40"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button className="py-2 px-4  bg-blue-400 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              投稿
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
