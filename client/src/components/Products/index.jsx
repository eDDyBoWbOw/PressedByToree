 import { Product } from '../../../../server/models';
 import { Link } from 'react-router-dom';
 //import { QUERY_PRODUCTS } from '../../../utils/queries';
 
 const ProductNames = [
    "Holy Hood Sweater",
    "Alice Starbucks",  
    "Pooh bear tumbler", 
    "Scream tumbler",
    "Scary tumbler", 
    "Mermaid tumbler", 
    "Pumpkin tumbler", 
    "Encanto tumbler",
    "Good guy tumbler"]

 function ProductItem() {

    return(
        <Product>
        <div class="container store-container">
        <div class="row">
            <div class="col-md-4">
                <div class="product-card">
                    <img src="https://via.placeholder.com/300" alt="Product Image" class="product-image"></img>
                    <div class="product-details">
                        <h5>Product 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><strong>$19.99</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="product-card">
                    <img src="https://via.placeholder.com/300" alt="Product Image" class="product-image"></img>
                    <div class="product-details">
                        <h5>Product 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><strong>$29.99</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="product-card">
                    <img src="https://via.placeholder.com/300" alt="Product Image" class="product-image"></img>
                    <div class="product-details">
                        <h5>Product 3</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><strong>$39.99</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Product/>
    )
};

export default ProductItem;