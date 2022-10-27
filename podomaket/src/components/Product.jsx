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
import {
  __addComments,
  __delComment,
  __editComment,
} from "../features/commentSlice";
import styled from "styled-components";

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { commentId } = useParams();

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProducts());
  }, [dispatch]);

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

  //get 방식으로..

  const [comments, setComments] = useState([]);
  const products = useSelector((state) => state.productList.products);

  // const post = products.data;
  // console.log(post);
  // const [comment, setComment] = useState({
  //   productId: id,
  //   commentId: post?.id,
  // });

  // console.log(comment);

  // const [comment, setComment] = useState([]);
  // const data = comment.data?.commentList;

  // console.log(data);
  // const __getCommentOne = async () => {
  //   const { data } = await axios.get(
  //     `http://43.201.102.30:8080/products/${id}`
  //   );
  //   setComment(data);
  // };

  // useEffect(() => {
  //   __getCommentOne(id);
  // }, []);

  // // 코멘트 삭제
  // const deleteComment = () => {
  //   dispatch(__delComment([id, data?.id]));
  // };

  const datas = comments.data?.commentList;
  const product = products;
  const contents = comments.data;

  // const commentList = Object.values(datas)[1].commentList;

  useEffect(() => {
    dispatch(__getProducts());
  }, [dispatch]);

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://43.201.102.30:8080/products/${id}`
    );
    setComments(data);
  };

  // console.log("jsx get 요청 =>", contents);

  useEffect(() => {
    fetchComments();
  }, []);

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };
  // 모달 상태
  const [modal, setModal] = useState(false);
  // 댓글의 id값 판별
  const [selected, setSelected] = useState(null);

  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    if (commentText !== "") {
      dispatch(__editComment({ id: selected, text: commentText }));
    } else {
      return;
    }
    setCommentText("");
    navigate(`/product/${id}`);
  };
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
        {datas?.map((comment) => {
          return (
            <Box key={comment.id}>
              <p>
                {comment?.username} : {comment?.content}
                <EditCommentButton
                  onClick={() => {
                    setModal(!modal);
                    setSelected(comment?.id);
                  }}
                >
                  {modal === true && comment?.id === selected ? "완료" : "수정"}
                </EditCommentButton>
                <DeleteCommentButton
                  onClick={() => {
                    dispatch(__delComment(comment?.id));
                  }}
                >
                  삭제
                </DeleteCommentButton>
              </p>
              {/* 댓글 수정 모달창 */}
              {modal === true && comment?.id === selected ? (
                <UpdateButton>
                  <Commentinput onChange={handleChange} value={commentText} />
                  <button
                    onClick={() => {
                      handleSubmit();
                      setModal(!modal);
                    }}
                  >
                    수정 완료
                  </button>
                </UpdateButton>
              ) : null}
            </Box>
          );
        })}
        <Flex>
          <CommentInput
            type="text"
            autoComplete="off"
            name="comments"
            placeholder="댓글을 작성해주세요"
            onChange={onChangeHandler}
          ></CommentInput>
          {token ? (
            <Button onClick={onAddCommentsHandler}>댓글달기</Button>
          ) : null}
        </Flex>
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

const Commentinput = styled.input`
  margin: 10px auto;
  width: 460px;
  padding: 20px;
  border: none;
  outline: none;
  background-color: #cfcfcf;
  color: #fff;
  resize: none;
`;

const CommentMore = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;
  &:hover {
    color: whitesmoke;
    transform: scale(1.2);
  }
`;
const UpdateButton = styled.div``;
