// 메인 페이지
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Container, Hr, NewPost } from "../style/main_styled";
import { __getProducts } from "../features/podoSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  // 게시글 보여주기
  useEffect(() => {
    dispatch(__getProducts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product/post">새 글 작성</NewPost>
      </Container>
      <Hr />
      <div>
        {products.map((podo) => {
          return (
            <div key={podo.id}>
              <div>{podo.id}</div>
              <div>{podo.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
