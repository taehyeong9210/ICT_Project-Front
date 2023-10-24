import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const HeadContainer = styled.div`
  width: 750px;

  background-color: grey;

  height: 150px;
  display: flex;
`;

const Circle = styled.div`
  background-color: white;
  width: 220px;
  height: 200px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const HeadTextContainer = styled.div`
  width: 510px;
`;
const Datdiv = styled.div`
  margin-left: 240px;
  font-size: 1.5rem;
  margin-top: 10px;
`;

const ImageGallery = styled.div`
  width: 250px;
  displat: flex;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Modal = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const DiaryComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

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
    setSelectedImage(image);
  };

  return (
    <HeadContainer className="left-aligned">
      <Circle onClick={handleOpenModal} />
      <HeadTextContainer>
        <Datdiv>2023년 10월 28일 토요일</Datdiv>
      </HeadTextContainer>

      <Modal open={modalOpen}>
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
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected"
            onClick={handleCloseModal}
          />
        )}
      </Modal>
    </HeadContainer>
  );
};

export default DiaryComponent;
