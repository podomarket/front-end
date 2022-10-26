// 게시글 페이지
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __delPrudcts,
  __getDetailProduct,
  __getProducts,
} from "../features/podoSlice";
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

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.productList.products);
  const { id } = useParams();

  console.log(products);

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getDetailProduct(id));
  }, []);

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

  //Comments

  const [comments, setComments] = useState({
    comments: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComments((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onAddCommentsHandler = (e) => {
    e.preventDefault();
    dispatch(__addComments(comments));
    setComments({
      comments: "",
    });
  };
  return (
    <Wrap>
      <Container>
        <>
          <Flex>
            <Flex>
              <div>
                <H1>{products?.title}</H1>
              </div>
              <Price>{products?.price}</Price>
            </Flex>
            <Flex>
              <EditButton onClick={() => navigate("/product/edit/" + id)}>
                수정
              </EditButton>
              <DeleteButton onClick={deletePost}>삭제</DeleteButton>
            </Flex>
          </Flex>
          <Image src={products?.imgUrl}></Image>
          <P>{products?.content}</P>
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
      </Container>
    </Wrap>
  );
};

export default Product;
