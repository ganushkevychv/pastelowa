import PhotoAlbum from "react-photo-album";
import Photos from "./Photos";

const GalleryComp = () => {

  return (
    <div className="gallery-container">
      <PhotoAlbum className="GalleryComp" layout="rows" photos={Photos} />
    </div>
  );
};

export default GalleryComp;
