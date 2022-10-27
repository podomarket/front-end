import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updatePost,
  __getDetailProduct,
  __getProducts,
  __updateProduct,
} from "../features/podoSlice";
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
  const { id } = useParams();

  // text useState
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // image preview useState
  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  // post useState
  const [post, setPost] = useState({
    id: id,
    title: "",
    content: "",
    price: "",
    file: "",
  });

  const imgFileHandler = (e) => {
    setUploadImageForm(e.target.files[0]);

    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImage([...previewImage, previewImgUrl]);
      }
    };
  };

  const postHandler = (e) => {
    setTitle(e.target.value);
    setContent(e.target.value);
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
      file: uploadImageForm,
    });
  };

  const submitHandler = () => {
    dispatch(updatePost(post));
  };

  const [products, setProducts] = useState([]);
  const data = products.data;
  const __getDetailProduct = async () => {
    const { data } = await axios.get(
      `http://54.173.186.166:8080/products/${id}`
    );
    setProducts(data);
  };

  useEffect(() => {
    __getDetailProduct(id);
  }, []);

  return (
    <Wrap>
      <Container>
        <ImageLayout>
          <ImageLabel htmlFor="file" />
          <ImageInput
            id="addFile"
            type="file"
            name="imageUrl"
            placeholder="업로드"
            accept={"image/*"}
            onChange={imgFileHandler}
          />
          <ImagePreview
            src={previewImage === "" ? data?.imgUrl : previewImage}
          />
        </ImageLayout>
        <Input
          id="title"
          name="title"
          defaultValue={data?.title}
          type="text"
          onChange={postHandler}
        />
        <div>
          <TextArea
            id="content"
            name="content"
            defaultValue={data?.content}
            onChange={postHandler}
          ></TextArea>
        </div>
        <Input
          id="price"
          name="price"
          defaultValue={data?.price}
          type="text"
          onChange={postHandler}
        />
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={submitHandler} to="/">
            수정하기
          </NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductEdit;
