import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __updateProduct } from "../features/podoSlice";
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

const ProductEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const postTitle = useSelector((state) => state.productList.products?.title);
  const postContent = useSelector(
    (state) => state.productList.products?.content
  );
  const postPrice = useSelector((state) => state.productList.products?.price);

  useEffect(() => {
    setTitle(postTitle);
  }, [postTitle]);

  useEffect(() => {
    setContent(postContent);
  }, [postContent]);

  useEffect(() => {
    setPrice(postPrice);
  }, [postPrice]);

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
  const updatePost = () => {
    const req = {
      title: products.title,
      content: products.content,
      // price: products.price,
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
    const params = {
      id,
      edit: {
        title: products.title,
        content: products.content,
        // price: products.price,
      },
      callBackFunc: () => {
        handleGoBack();
      },
    };
    dispatch(__updateProduct(params));
  };
  const handleGoBack = () => {
    navigate(-1);
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
          value={title}
          onChange={onChangeHandler}
        />
        <div>
          <TextArea
            id="content"
            name="content"
            value={content}
            onChange={onChangeHandler}
          ></TextArea>
        </div>
        <Input
          id="price"
          name="price"
          type="text"
          value={price}
          onChange={onChangeHandler}
        />
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={updatePost}>수정하기</NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductEdit;
