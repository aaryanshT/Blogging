import React from 'react';
import TextEditor from '../components/TextEditor';

const AddBlog = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-4xl p-8">
        <TextEditor className="rounded-none w-full border border-gray-300 p-4" />
      </div>
    </div>
  );
};

export default AddBlog;
