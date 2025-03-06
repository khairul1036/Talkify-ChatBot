import React from "react";
import Image from "next/image";

const Chat = ({ logo }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 md:p-4 md:max-w-4xl mx-auto mt-20 mb-36">
        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-3xl rounded-bl-none">
            <p className="text-sm">
              Hey, how are you doing today? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed sunt dolore aliquid molestias
              dolorem quasi ut dolor nobis quae iste et veritatis, nam odio
              reiciendis suscipit corrupti ab architecto voluptatibus repellat
              delectus hic illo omnis! Atque ipsum consectetur ab nisi, ipsam
              reprehenderit ad quae ipsa corrupti ducimus perferendis numquam
              explicabo?
            </p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg rounded-br-none max-w-3xl flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Nobis ullam cum a
              modi ipsam necessitatibus veritatis fugit esse, odit voluptas.
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you?
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you?
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you?
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you?
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you?
            </p>
          </div>
        </div>

        {/* User Chat Bubble */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs rounded-bl-none">
            <p className="text-sm">Hey, how are you doing today?</p>
          </div>
        </div>

        {/* Assistant Chat Bubble with Image */}
        <div className="flex justify-start">
          <div className=" text-gray-800 p-3 rounded-lg max-w-xs rounded-br-none flex items-start space-x-3">
            {/* Image on the left side of the assistant's bubble */}
            <Image
              src={logo}
              alt="Assistant"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">
              I am doing great, thanks for asking! How about you? 5555
            </p>
          </div>
        </div>
      </div>

      {/* user Prompt Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <div className="max-w-5xl mx-auto">
          <form className="relative flex items-center md:ml-64 lg:ml-60">
            {/* Textarea Input */}
            <textarea
              rows="3"
              placeholder="Ask anything..."
              className="w-full px-4 py-2 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all resize-none"
            />

            {/* Send Button with Icon */}
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
