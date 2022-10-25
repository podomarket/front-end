import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __addProducts, __getProducts } from "../features/podoSlice";
import {
  BackButton,
  ButtonSet,
  Container,
  ImageInput,
  ImageLabel,
  ImageLayout,
  ImagePreview,
  Input,
  NewButton,
  TextArea,
  Wrap,
} from "../style/productPost_styled";

const ProductPost = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState({
    title: "",
    imageUrl: "",
    content: "",
    price: 0,
    date: new Date().getTime(),
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProducts((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // 새 글 작성
  const addProduct = (e) => {
    let req = {
      title: products.title,
      content: products.content,
      price: products.price,
    };
    let json = JSON.stringify(req);
    const form = new FormData();
    //콘솔 추가
    const titleblob = new Blob([json], { type: "application/json" });
    form.append("title", titleblob);
    console.log(titleblob);
    const contentblob = new Blob([json], { type: "application/json" });
    form.append("content", contentblob);
    const priceblob = new Blob([json], { type: "application/json" });
    form.append("price", priceblob);
    form.append("imageUrl", imageUrl);
    dispatch(__addProducts(products));
    setProducts({
      title: "",
      imageUrl: "",
      content: "",
      price: 0,
      date: new Date().getTime(),
    });
  };

  // 파일 업로드
  const [imageUrl, setImageUrl] = useState("");

  const fileUpload = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImageUrl(image);
  };
  console.log();

  return (
    <Wrap>
      <Container>
        <ImageLayout>
          <ImageLabel htmlFor="file" />
          <ImageInput
            id="file"
            type={"file"}
            name="imageUrl"
            placeholder="업로드"
            accept={"image/*"}
            onChange={fileUpload}
          />
          <ImagePreview src={imageUrl} />
        </ImageLayout>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={onChangeHandler}
        />
        <div>
          <TextArea
            id="content"
            name="content"
            placeholder="내용을 입력해주세요"
            onChange={onChangeHandler}
          ></TextArea>
        </div>
        <Input
          id="price"
          name="price"
          type="text"
          placeholder="가격을 입력해주세요"
          onChange={onChangeHandler}
        />
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={addProduct} to="/">
            새 글 작성
          </NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductPost;
