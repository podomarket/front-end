import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductDB } from "../redux/async/post";

const ProductPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addProduct = () => {
    dispatch(addProductDB({ title, body }));
  };

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력해주세요"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div>
        <textarea
          id="body"
          name="body"
          placeholder="내용을 입력해주세요"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button to="/">뒤로가기</button>
        <button onClick={addProduct}>새 글 작성</button>
      </div>
    </div>
  );
};

export default ProductPost;
