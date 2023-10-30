import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const HeadContainer = styled.div`
  width: 750px;
  height: 200px;
  display: flex;
  position: relative;
`;

const FileInput = styled.input`
  width: 400px;
  height: 200px;
  margin-top: 20px;
  left: 20px;
  display: none;
`;

const ImagePreview = styled.div`
  width: 330px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
  background-image: url(${({ previewImage }) => previewImage});
  background-size: cover;
  background-position: center;
`;

const TitleInput = styled.input`
  display: block;
  margin: auto;
  margin-top: 10px;
  height: 30px;
  width: 200px;
  font-size: 20px;
  border: none;
  outline: none;
  background: linear-gradient(to right, #006400, #006400) no-repeat bottom;
  background-size: 0% 2px;
  transition: background-size 0.5s ease;
  text-align: center;

  &:focus {
    background-size: 100% 2px;
  }

  &::placeholder {
    color: grey;
    text-align: center;
  }
`;

const HeadTextContainer = styled.div`
  width: 510px;
  position: absolute;
  top: 0;
  left: 450px;
`;

const BodyContainer = styled.div`
  width: 750px;
  height: 250px;

  position: absolute;
`;

const MainTextarea = styled.textarea`
  display: block;
  margin: auto;
  margin-top: 50px;
  height: 60px; /* 높이 조절 */
  width: 600px;
  font-size: 16px;
  border: none;
  outline: none;
  background: linear-gradient(to right, #006400, #006400) no-repeat bottom;
  background-size: 0% 2px;
  transition: background-size 0.5s ease;
  text-align: center;
overflow:hidden;

  &:focus {
    background-size: 100% 2px;
  }


    &::placeholder {
      color: grey;
      text-align: center; 
      position: absolute;
      bottom: 0;
      width: 100%; 
    }
  }
`;

const Datdiv = styled.div`
  font-size: 1.75rem;
  margin-top: 20px;
  margin-left: 80px;
`;

const DiaryComponentimg = () => {
  const [previewImage, setPreviewImage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <HeadContainer className="left-aligned">
        <label
          htmlFor="fileInput"
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <FileInput
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept="image/*"
          />
          <ImagePreview previewImage={previewImage} />
          {!previewImage && (
            <span style={{ textAlign: 'center' }}>이미지 선택</span>
          )}
        </label>
        <HeadTextContainer>
          <Datdiv
            style={{
              fontFamily: 'Dongle, sans-serif',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            2023년 10월 28일 토요일
          </Datdiv>
        </HeadTextContainer>
      </HeadContainer>
      <BodyContainer>
        <TitleInput placeholder="TITLE"></TitleInput>
        <MainTextarea placeholder="오늘은 어땠나요?" rows={1}></MainTextarea>
      </BodyContainer>
    </>
  );
};
export default DiaryComponentimg;
