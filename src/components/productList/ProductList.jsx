import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data";
const ProductList = () => {
    return ( 
        <div className="productList">
            <div className="productList-texts">
                <h1 className="productList-title">Create & inspire.</h1>
                <p className="productList-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
                </p>
            </div>
            <div className="productList-list">
                { products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
                    ))}
            </div>
        </div>
     );
}
 
export default ProductList;