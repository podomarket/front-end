import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getBoards } from "../features/podoSlice";

export const ChatList = () => {
  const { getboards } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  // 상품 보여주기
  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  const clickHandler = async () => {
    dispatch(__getBoards());
  };

  return (
    <div>
      <button onClick={clickHandler}>연태님 제발 돼라!!!</button>
    </div>
  );
};

export default ChatList;
