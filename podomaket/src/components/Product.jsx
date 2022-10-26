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
  ImageBox,
  Like,
  LikeAndComment,
  P,
  Price,
  Wrap,
} from "../style/Product_styled";
import { __addComments, __delComment } from "../features/commentSlice";
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

  // console.log("jsx get 요청 =>", contents);

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
              <Price>{contents?.price}원</Price>
            </Flex>
            {token ? (
              <Flex>
                <EditButton onClick={() => navigate("/product/edit/" + id)}>
                  수정
                </EditButton>
                <DeleteButton onClick={deletePost}>삭제</DeleteButton>
              </Flex>
            ) : null}
          </Flex>
          <ImageBox>
            <Image src={contents?.imgUrl}></Image>
          </ImageBox>
          <P>{contents?.content}</P>
        </>
        <hr />
        <Flex>
          <div></div>
          {token ? (
            <Button onClick={onAddCommentsHandler}>댓글달기</Button>
          ) : null}
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
            <Box key={comment.id}>
              <p>
                {comment?.username} : {comment?.content}
                <EditCommentButton>수정</EditCommentButton>
                <DeleteCommentButton
                  onClick={() => {
                    dispatch(__delComment(comment?.id));
                  }}
                >
                  삭제
                </DeleteCommentButton>
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
  width: 500px;
`;
const EditCommentButton = styled.button`
  margin-left: 10px;
  padding: 0.2rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1.5px solid #2e0533;
  border-radius: 2em;
  font-weight: 600;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
const DeleteCommentButton = styled.button`
  margin-left: 10px;
  padding: 0.2rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1.5px solid #2e0533;
  border-radius: 2em;
  font-weight: 600;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
