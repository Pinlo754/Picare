import React from 'react';
import axios from 'axios';
import { ProductDetail } from '../../types/ProductDetail';
import ImageGallery from '../../components/ImageGallery';

const ProductDetails = () => {
    const [product, setProduct] = React.useState<ProductDetail | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('/com/products/1054652497.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 4873446EAC30ECCA2FF502A69402B8CDDA1FD4DFC61F0F0AC569B9AE98912B3B'
                    }
                });

                console.log(response.data.product);
                setProduct(response.data.product); // Directly access the data from the response   

                setLoading(false);
            } catch (error) {
                setError('Failed to fetch product details.');
                setLoading(false);
                console.error(error); // Log the error for debugging
            }
        };

        fetchProduct();
        console.log(product);
    }, []);

    if (loading) return <p>Loading...</p>; // Show loading state
    if (error) return <p>{error}</p>; // Show error message if any

    return (
        <>
            {/* Display image gallery */}
            {product && <ImageGallery images={product.images} />}
            <h1 className='text-xl my-4'>{product?.title}</h1> {/* Display product title */}


            <h2 className="text-lg font-semibold my-4 border-b-2 border-solid border-black  pb-2">
                Mô tả sản phẩm
            </h2>

            {product?.body_html && <div dangerouslySetInnerHTML={{ __html: product.body_html }}></div>} {/* Display product description */}
        </>
    );
};

export default ProductDetails;
