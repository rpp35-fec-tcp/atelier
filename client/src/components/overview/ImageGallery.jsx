import React from 'react';
import styled from 'styled-components';
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdOutlineHideImage,
} from 'react-icons/md';

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 32px;
`;

const ThumbnailsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  align-items: center;
`;

const ThumbnailsView = styled.div`
  max-height: ${`${thumbnailsHeight}px`};
  overflow-x: visible;
  overflow-y: hidden;
`;

const ThumbnailsWrapper = styled.div`
  margin-top:  ${props => props.offset}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: visible;
  transition: all 0.3s ease-in-out 0s;
`;

const ThumbnailWrapper = styled.div`
  & {
    border-radius: 4px;
    width: 48px;
    height: 48px;
    margin-bottom: 2px;
    overflow: hidden;
    background-image: ${(props) => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:focus-visible {
    border: 6px solid var(--color-brand-400);
    outline: none;
  }
`;

const ThumbnailSelectedIndicator = styled.div`
  height: 4px;
  background: var(--color-brand-300);
  border-radius: 2px;
`;

const ThumbnailSelected = styled.div`
  margin-bottom: 12px;
`;

const ThumbnailEmpty = styled.div`
  background-color: var(--color-grey-050);
  border-radius: 4px;
  font-size: 24px;
  color: var(--color-grey-300);
  width: 48px;
  height: 48px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.div`
  & {
    margin-bottom: 16px;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer
  }
  &:active {
    opacity: 0.5;
  }
`;

const thumbnailHeight = 48;
const thumbnailBottom = 18;
const countVisibleThumbnails = 7
const thumbnailsHeight = countVisibleThumbnails * (thumbnailHeight + thumbnailBottom);

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const {currentStyle, photos} = this.props;

    const thumbnails = photos.map((photo, index) => {
      return (
      index === this.state.currentIndex ? (
      <ThumbnailSelected key={index}>
        {photo.thumbnail_url ?
          (<ThumbnailWrapper url={photo.thumbnail_url} value={index} />) :
          (<ThumbnailEmpty selected={true} ><MdOutlineHideImage/></ThumbnailEmpty>)
        }
        <ThumbnailSelectedIndicator/>
      </ThumbnailSelected>
      ) : (
      <Thumbnail key={index} >
      {photo.thumbnail_url ?
        (<ThumbnailWrapper tabIndex="0" onKeyPress={this.changeImage} onClick={this.changeImage} url={photo.thumbnail_url} value={index} />) :
        (<ThumbnailEmpty selected={false} ><MdOutlineHideImage/></ThumbnailEmpty>)
      }
      </Thumbnail>
      )
    )});

    const thumbnailsOffset = this.state.currentIndex >= countVisibleThumbnails ? -(this.state.currentIndex - countVisibleThumbnails + 1) * (thumbnailHeight + thumbnailBottom) : 0;

    let nextImage, previousImage, nextThumbnail, previousThumbnail;


    return (
      <Gallery>
        <ThumbnailsSection>
          <ThumbnailsView>
            <ThumbnailsWrapper>{thumbnails}</ThumbnailsWrapper>
          </ThumbnailsView>
          <button
            className='image-gallery-buttons'
            id='back'
            onClick={this.props.changePhoto}
          >
            ←
          </button>
          <img src={this.props.photoURL} />
          <button
            class='image-gallery-buttons'
            id='forward'
            onClick={this.props.changePhoto}
          >
            →
          </button>
        </ThumbnailsSection>
      </Gallery>
    );
  }
}

export default ImageGallery;
