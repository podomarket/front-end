// 메인 페이지
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getProducts } from "../features/podoSlice";
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
import { Flex } from "../style/Product_styled";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);

  const data = products.data;
  const time = data?.modifiedAt;
  const date = new Date().getTime();
  console.log(time);

  useEffect(() => {
    dispatch(__getProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems(data?.slice(indexOfFirst, indexOfLast));
  };

  const ShowMoreItems = () => {
    addItems();
    setPostsPerPage(postsPerPage + 4);
  };

  useEffect(() => {
    if (!!data && items.length === 0) {
      ShowMoreItems();
    }
  }, [data]);

  return (
    <>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product">새 글 작성</NewPost>
      </Container>
      <Hr />
      <Wrap>
        <>
          <ul>
            {items &&
              items.map((post) => {
                return (
                  <List key={post.id}>
                    <Product>
                      <Thumbnail
                        src={post.imgUrl}
                        onClick={() => navigate("/product/" + post.id)}
                      ></Thumbnail>
                      <Flex>
                        <Title onClick={() => navigate("/product/" + post.id)}>
                          {post?.title}
                        </Title>
                      </Flex>
                      <FlexDiv>
                        <Price>{post?.price}원</Price>
                        <div>{detailDate(post.createdAt)}</div>
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
    </>
  );
};

export default Main;
