// 게시글 페이지
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __delPrudcts } from "../features/podoSlice";
import { __getProducts } from "../features/podoSlice";
import axios from "axios";
import {
  Button,
  CommentInput,
  Container,
  DeleteButton,
  EditButton,
  Flex,
  H1,
  Image,
  Like,
  LikeAndComment,
  P,
  Price,
  Wrap,
} from "../style/Product_styled";
import { __addComments } from "../features/commentSlice";
import styled from "styled-components";

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  // console.log("게시글 보여줘...", data);

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProducts());
  }, [dispatch]);

  // console.log("Product.jsx file", products);

  const handleGoBack = () => {
    navigate(-1);
  };

  // 게시글 삭제
  const deletePost = () => {
    const params = {
      id,
      callBackFunc: () => {
        handleGoBack();
      },
    };
    dispatch(__delPrudcts(params));
  };

  //Comments 추가
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const token = localStorage.getItem("accessToken");

  const onAddCommentsHandler = (e) => {
    e.preventDefault();
    dispatch(__addComments({ content, id }));
    setContent("");
  };

  //Test

  const [comments, setComments] = useState([]);
  const datas = comments.data?.commentList;
  const contents = comments.data;

  // const commentList = Object.values(datas)[1].commentList;

  // console.log("data console", datas);

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://54.173.186.166:8080/products/${id}`
    );
    setComments(data);
  };

  console.log("jsx get 요청 =>", contents);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Wrap>
      <Container>
        <>
          <Flex>
            <Flex>
              <div>
                <H1>{contents?.title}</H1>
              </div>
              <Price>{contents?.price}</Price>
            </Flex>
            <Flex>
              <EditButton onClick={() => navigate("/product/edit/" + id)}>
                수정
              </EditButton>
              <DeleteButton onClick={deletePost}>삭제</DeleteButton>
            </Flex>
          </Flex>
          <Image src={contents?.imgUrl}></Image>
          <P>{contents?.content}</P>
        </>
        <hr />
        <Flex>
          <LikeAndComment>
            <Like>❤ 5</Like>
            <div>💬 3</div>
          </LikeAndComment>
          <Button onClick={onAddCommentsHandler}>댓글달기</Button>
        </Flex>
        <CommentInput
          type="text"
          autoComplete="off"
          name="comments"
          placeholder="댓글을 작성해주세요"
          onChange={onChangeHandler}
        ></CommentInput>
        {datas?.map((comment) => {
          return (
            <Box>
              <p>
                {comment?.username} : {comment?.content}
                <button>수정</button>
                <button>삭제</button>
              </p>
            </Box>
          );
        })}
      </Container>
    </Wrap>
  );
};

export default Product;

const Box = styled.div`
  padding: 15px;
  width: 300px;
`;
