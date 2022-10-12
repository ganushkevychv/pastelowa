import PhotoAlbum from "react-photo-album";
import background from '../images/background.webp'
import backgroundOne from '../images/backgroundOne.webp'
import backgroundTwo from '../images/backgroundTwo.webp'
import backgroundThree from '../images/backgroundThree.webp'
import backgroundMOne from '../images/backgroundMOne.webp'
import backgroundMTwo from '../images/backgroundMTwo.webp'
import backgroundMThree from '../images/backgroundMThree.webp'


const GalleryComp = () => {

    const photos = [
        {
            src: background,
            width: 800,
            height: 600
        },
        {
            src: backgroundOne,
            width: 1600,
            height: 900
        },
        {
            src: backgroundTwo,
            width: 1600,
            height: 900
        },
        {
            src: backgroundThree,
            width: 1600,
            height: 900
        },
        {
            src: backgroundMOne,
            width: 1600,
            height: 900
        },
        {
            src: backgroundMTwo,
            width: 1600,
            height: 900
        },
        {
            src: backgroundMThree,
            width: 1600,
            height: 900
        }
    ];

    return (
<PhotoAlbum className="GalleryComp" layout="rows" photos={photos} />

    )
}

export default GalleryComp;