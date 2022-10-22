import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addProducts } from "../features/podoSlice";
import {
  BackButton,
  ButtonSet,
  Container,
  CustomFile,
  Input,
  NewButton,
  TextArea,
  UploadName,
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
    const file = e.target.files;
    setImageUrl(file);
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

  const [imageUrl, setImageUrl] = useState("");
  console.log();

  const onLoadFile = (e) => {
    const file = e.target.files;
    setImageUrl(file);
  };

  // const handleClick = (e) => {
  //   const formdata = new FormData();
  //   formdata.append("uploadImage", imageUrl[0]);

  //   const config = {
  //     Header: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };

  //   axios.post(`http://localhost:3001/product`, formdata, config);
  // };
  return (
    <Wrap>
      <Container>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={onChangeHandler}
        />
        <div>
          <TextArea
            className="textarea"
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
        <CustomFile>
          <span>이미지 파일을 선택해주세요</span>
          <UploadName
            id="file"
            type="file"
            name="imageUrl"
            placeholder="파일을 업로드해주세요"
            accept="image/*"
            multiple={true}
            onChange={onChangeHandler}
          />
        </CustomFile>
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
