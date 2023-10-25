import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const HeadContainer = styled.div`
  width: 750px;
  height: 200px;
  display: flex;
  position: relative;
`;

const Circle = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  background-image: url(${({ selectedImage }) => selectedImage});
  background-size: cover;
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
`;

const ImageGallery = styled.div`
  width: 250px;
  display: flex;
  position: absolute;
  top: 220px;
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
        <Datdiv style={{ fontFamily: 'single Day, sans-serif' }}>
          2023년 10월 28일 토요일
        </Datdiv>
        <input placeholder="TITLE"></input>
      </HeadTextContainer>
    </HeadContainer>
  );
};

export default DiaryComponent;