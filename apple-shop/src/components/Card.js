function Card({ imgUrl, alt, width, title, price }) {
  return (
    <div className="col-md-4">
      <img src={imgUrl} alt={alt} width={width} />
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
}

export default Card;
