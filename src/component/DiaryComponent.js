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

const Circle = styled.div`
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 50px;
  background-image: url(${({ selectedImage }) => selectedImage});
  background-size: cover;
`;

const TitleInput = styled.input`
  display: block;
  margin: auto;
  margin-top: 200px;
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

const Datdiv = styled.div`
  font-size: 1.75rem;
  margin-top: 20px;
  margin-left: 80px;
`;

const ImageGallery = styled.div`
  width: 250px;
  display: flex;
  position: absolute;
  top: 170px;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Modal = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
`;

const DiaryComponent = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    '/images/smile.png',
    '/images/good.png',
    '/images/normal.png',
    '/images/notgood.png',
    '/images/bad.png',
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageClick = (image) => {
    if (modalOpen) {
      setSelectedImage(image);
    }
  };

  const handleModalClick = () => {
    handleCloseModal();
  };

  return (
    <HeadContainer className="left-aligned">
      <FileInput type="file" />
      <Modal open={modalOpen} onClick={handleModalClick}>
        <ImageGallery>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Selected"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </ImageGallery>
      </Modal>

      <Circle selectedImage={selectedImage} onClick={handleOpenModal} />
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
      <TitleInput placeholder="TITLE"></TitleInput>
    </HeadContainer>
  );
};

export default DiaryComponent;
