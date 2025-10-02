import React from "react";

export const MessageSentCard = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Success Card Container */}
      <div className="bg-white border-2 border-lavender/50 rounded-lg shadow-xl p-8 max-w-sm w-full transform transition duration-300 hover:shadow-2xl ">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          {/* Icon Container: Centered, Circular, Lavender Border */}
          <div className="bg-green-500 rounded-full p-2 w-16 h-16 flex items-center justify-center text-white text-3xl font-bold">
            {/* Unicode Checkmark */}
            &#10003;
          </div>
        </div>

        {/* Header */}
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Message Sent!
        </h3>

        {/* Original Text */}
        <p className="mt-2 text-center text-lg font-medium text-gray-600">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      </div>
    </div>
  );
};
