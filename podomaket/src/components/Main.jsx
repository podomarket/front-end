// 메인 페이지
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  FlexDiv,
  H2Button,
  Hr,
  Like,
  LikeAndReply,
  LikeAndReplyFlex,
  List,
  NewPost,
  Price,
  Product,
  ProductView,
  Reply,
  Thumbnail,
  Title,
  Wrap,
} from "../style/main_styled";
import { __getProducts } from "../features/podoSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
import styled from "styled-components";

export const Main = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  // const [totalPosts, setTotalPosts] = useState(0);

  const data = products.data;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      dispatch(__getProducts());
      // setProducts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (data) => {
    let currentPosts = 0;

    currentPosts = data?.slice(indexOfFirst, indexOfLast);
    console.log(currentPosts);
    return currentPosts;
  };

  const ShowMoreItems = () => {
    setPostsPerPage(postsPerPage + 4);
  };

  return (
    <>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product">새 글 작성</NewPost>
      </Container>
      <Posts posts={currentPosts(data)} loading={loading}></Posts>

      <ProductView>
        <div></div>
        <H2Button onClick={ShowMoreItems}>더 많은 상품 보기</H2Button>
      </ProductView>
    </>
  );
};

export default Main;
