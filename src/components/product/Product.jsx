import "./product.css"
import productImage from "../../img/profuct1.jpg"
const Product = ({ img, link}) => {
    return ( 
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={link} target="blank" rel="noreferrer">
                <img src={productImage} alt="" className="product-img"/>
            </a>
        </div>
     );
}
 
export default Product;