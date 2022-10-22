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

  const detailDate = (a) => {
    const milliSeconds = new Date().getTime() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

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
                <li>date: {detailDate(podo.date)}</li>
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
