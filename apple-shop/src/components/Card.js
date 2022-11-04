function Card({ imgUrl, alt, width, title, price, onClick }) {
  return (
    <div className="col-md-4" onClick={onClick}>
      <img src={imgUrl} alt={alt} width={width} />
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
}

export default Card;
