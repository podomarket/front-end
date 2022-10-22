// 메인 페이지
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Container,
  H2Button,
  Hr,
  List,
  NewPost,
  ProductView,
} from "../style/main_styled";
import { __getProducts } from "../features/podoSlice";

export const Main = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productList);

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProducts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product">새 글 작성</NewPost>
      </Container>
      <Hr />
      <div>
        {products.map((podo) => {
          return (
            <List key={podo.id}>
              <ul>
                <li>imageUrl: {podo.imageUrl}</li>
                <li>title: {podo.title}</li>
                <li>price: {podo.price}</li>
                <li>date: {podo.date}</li>
              </ul>
            </List>
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
