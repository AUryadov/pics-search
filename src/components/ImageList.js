import ImageCard from "./ImageCard";
import "./ImageList.css";

// const ImageList = (props) => {
const ImageList = ({ images }) => {
    //const { images } = props;
    return (
        <div className="image-list">
            {/* {images.map((props.image) => ( */}
            {images.map((image) => (
                <ImageCard key={image.urls.regular} image={image} />
            ))}
        </div>
    );
};

export default ImageList;
