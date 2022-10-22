// 메인 페이지
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Container,
  H2Button,
  Hr,
  NewPost,
  ProductView,
} from "../style/main_styled";
import { __getProducts } from "../features/podoSlice";

export const Main = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  console.log("상품 목록", products);

  // 상품 보여주기
  useEffect(() => {
    console.log("데이터 패칭!");
    dispatch(__getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product">새 글 작성</NewPost>
      </Container>
      <Hr />
      <div>
        {products?.map((podo) => {
          console.log(podo);
          return (
            <div key={podo.id}>
              <div>{podo.id}</div>
              <div>{podo.title}</div>
              <div>{podo.nickname}</div>
            </div>
          );
        })}
      </div>
      <Hr />
      <ProductView>
        <div></div>
        <H2Button>더 많은 상품 보기</H2Button>
      </ProductView>
    </div>
  );
};

export default Main;
