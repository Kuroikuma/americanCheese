export const CardPointSaleView = (props) => {
  const { nombre, ingrediente, precio, handleFdetail, imagen } = props;
  const apiUrl = "https://localhost:44323/";
  return (
    <>
      <div onClick={() => handleFdetail()} className="cardProducto">
        <div className="product">
          <div className="product__image">
            <img src={`${apiUrl}${imagen}`} alt="" />
            <p>{nombre}</p>
          </div>
        </div>
        <div className="ingredients">
          <h3>Ingredientes</h3>
          {ingrediente.map((item) => (
            <p>{item.ingrediente}</p>
          ))}
        </div>
        <div className="price">
          <div>C${precio}</div>
        </div>
      </div>
    </>
  );
};
