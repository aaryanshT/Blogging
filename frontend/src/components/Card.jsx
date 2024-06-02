import React from "react";

const Card = () => {
  return (
    <div className="card w-96  shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">Blog Title</h2>
        <p>Blog Author</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
