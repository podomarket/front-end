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
  Loading,
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

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [totalPosts, setTotalPosts] = useState(0);

  const data = posts.data;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://54.173.186.166:8080/products");
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = Object.keys(posts).slice(indexOfFirst, indexOfLast);
    // currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const ShowMoreItems = () => {
    setPostsPerPage(postsPerPage + 4);
  };

  return (
    <div posts={currentPosts(posts)} loading={loading}>
      <div>
        <Container>
          <h2>오늘의 상품 추천</h2>
          <NewPost to="/product">새 글 작성</NewPost>
        </Container>
        <Hr />
        <Wrap>
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
          <>
            {loading && <Loading> loading... </Loading>}
            <ul>
              {data &&
                data.map((post) => {
                  return (
                    <List key={post.id}>
                      <Product>
                        <Thumbnail
                          onClick={() => navigate("/product/" + post.id)}
                        ></Thumbnail>
                        <LikeAndReply>
                          <Title
                            onClick={() => navigate("/product/" + post.id)}
                          >
                            {post?.title}
                          </Title>
                          <LikeAndReplyFlex>
                            <Like
                            // onClick={() => {
                            //   setLike(like + 1);
                            // }}
                            >
                              ❤<span></span>
                            </Like>
                            <Reply
                            // onClick={() => {
                            //   setReply(reply + 1);
                            // }}
                            >
                              💬<span></span>
                            </Reply>
                          </LikeAndReplyFlex>
                        </LikeAndReply>
                        <FlexDiv>
                          <Price>{post?.price}</Price>
                          <div>{detailDate(post.date)}</div>
                        </FlexDiv>
                      </Product>
                    </List>
                  );
                })}
            </ul>
          </>
        </Wrap>
        <Hr />
        <ProductView>
          <div></div>
          <H2Button onClick={ShowMoreItems}>더 많은 상품 보기</H2Button>
        </ProductView>
      </div>
    </div>
  );
};

const PageUl = styled.ul`
  width: 355px;
  margin: 20px auto;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

export default Main;
