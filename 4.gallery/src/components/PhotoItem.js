import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setBgColor, showModal } from '../redux/imageModal';
import LazyLoad from 'react-lazyload'
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = e => {
    dispatch(showModal({ src: urls.full, alt }));

    const averageColor = getAverageColorOfImage(e.target);
    dispatch(setBgColor(averageColor))
  };

  return (
    <ImageWrap>
      <LazyLoad offset={1000}>
        <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} crossOrigin='*'/>
      </LazyLoad>
    </ImageWrap>
  );
}

// const ImageWrap = styled.div`
//   position: relative;
//   width: 100%;
//   padding-top: 56.25%; /* 16:9 */
// `;

// const Image = styled.img`
//   cursor: pointer;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
// `;
const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default PhotoItem;
