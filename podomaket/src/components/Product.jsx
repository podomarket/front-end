// 게시글 페이지
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __delPrudcts, __getProducts } from "../features/podoSlice";
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
import { getComments, __addComments } from "../features/commentSlice";

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.productList.products);
  const { id } = useParams();

  const data = products.data;

  console.log(products);

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProducts());
    dispatch(getComments({ id }));
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

  //comments 불러오기
  useEffect(() => {});

  return (
    <Wrap>
      <Container>
        <>
          <Flex>
            <Flex>
              <div>
                <H1>{data?.title}</H1>
              </div>
              <Price>{data?.price}</Price>
            </Flex>
            <Flex>
              <EditButton onClick={() => navigate("/product/edit/" + id)}>
                수정
              </EditButton>
              <DeleteButton onClick={deletePost}>삭제</DeleteButton>
            </Flex>
          </Flex>
          <Image src={data?.imgUrl}></Image>
          <P>{data?.content}</P>
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
        <p>
          {id} : {content} 되나요
        </p>
      </Container>
    </Wrap>
  );
};

export default Product;
