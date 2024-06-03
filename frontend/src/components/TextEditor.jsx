import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ className }) => {
  const quillRef = useRef(null);

  return (
    <div className={className}>
      <ReactQuill ref={quillRef} theme="snow" />
    </div>
  );
};

export default TextEditor;
