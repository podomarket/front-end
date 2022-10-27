// 메인 페이지
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
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

// 이게 소영이 올린 Main.jsx입니다

export const Main = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);

  const ShowMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProducts());
    fetch("http://43.201.102.30:8080/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

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

  const [like, setLike] = useState(0);
  const [reply, setReply] = useState(0);
  return (
    <div>
      <Container>
        <h2>오늘의 상품 추천</h2>
        <NewPost to="/product">새 글 작성</NewPost>
      </Container>
      <Hr />
      <Wrap>
        {Object.keys(items)
          .slice(0, visible)
          .map((podo) => {
            return (
              <List key={podo.id}>
                <Product>
                  <Thumbnail
                    onClick={() => navigate("/product/" + podo.id)}
                  ></Thumbnail>
                  <Title onClick={() => navigate("/product/" + podo.id)}>
                    {podo.title}
                  </Title>
                  <FlexDiv>
                    {/* <Price>{podo.price}</Price> */}
                    {/* <div>{detailDate(podo.date)}</div> */}
                  </FlexDiv>
                </Product>
              </List>
            );
          })}
      </Wrap>
      <Hr />
      <ProductView>
        <div></div>
        <H2Button onClick={ShowMoreItems}>더 많은 상품 보기</H2Button>
      </ProductView>
    </div>
  );
};

export default Main;
