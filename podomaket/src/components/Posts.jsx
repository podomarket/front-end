import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Posts = ({ posts }) => {
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [totalPosts, setTotalPosts] = useState(0);

  const data = products.data;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://54.173.186.166:8080/products");
      setProducts(response.data);
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
    <>
      <Hr />
      <Wrap>
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
                        <Title onClick={() => navigate("/product/" + post.id)}>
                          {post?.title}
                        </Title>
                        <LikeAndReplyFlex>
                          <Like>
                            ❤<span></span>
                          </Like>
                          <Reply>
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
    </>
  );
};
export default Posts;
