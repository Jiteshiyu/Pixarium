export default function ImageItem({ image }) {
  return (
    <div>
      <img src={image} alt="gallery-image" className="img-item" />
    </div>
  );
}
