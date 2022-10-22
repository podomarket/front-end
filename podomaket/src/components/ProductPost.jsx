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
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import

const ProductPost = () => {
  const dispatch = useDispatch();

  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
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
  const nowDate = detailDate(new Date());
  const [products, setProducts] = useState({
    title: "",
    imageUrl: "",
    content: "",
    price: 0,
    date: nowDate,
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
      date: nowDate,
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
