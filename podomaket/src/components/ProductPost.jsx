import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addProducts } from "../features/podoSlice";
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

  const addProduct = (e) => {
    dispatch(__addProducts(products));
    setProducts({
      title: "",
      imageUrl: "",
      content: "",
      price: 0,
      date: new Date().getTime(),
    });
  };
  const [image, setImage] = useState("");

  const fileUpload = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
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
          <ImagePreview src={image} />
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
