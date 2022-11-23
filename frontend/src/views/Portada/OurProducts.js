import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/OurProducts.css';
// import image from '../../../static/images/OurProducts.png';
import { Link } from 'react-router-dom';
import SearchProduct from '../Products/SearchProduct';
import product from '../../../static/images/product.png';
import CarouselItem from '../../components/CarouselItem';
import { get } from '../../api/API';

const OurProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [slidePixels, setSlidePixels] = useState(0);
    const [indexSelected, setIndexSelected] = useState(0);
    const [value, setValue] = useState({ title: 'Product1', image: product, index: 0 });
    const [inputValue, setInputValue] = useState('Product1');

    useEffect(() => {
        const getProducts = async () => {
            const { data, message } = await get('get-products-list');
            let array = [];
            data.map((product, index) => {
                let item = {
                    name: product.name,
                    image: product.image,
                    index: index
                }
                array.push(item);
            })
            setProducts(array);
        }
        getProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setValue(products[indexSelected]);
            setInputValue(products[indexSelected].name);
        }
    }, [products]);

    useEffect(() => {
        if (value != null) {
            setIndexSelected(value.index);
            setSlidePixels(document.getElementsByClassName('ProductSlider-item')[value.index]?.offsetWidth*(value.index)*(-1))
        }
    }, [value]);

    // const ProductCarousel = () => {
    //     return (
    //         <CarouselItem
    //             additionalTransfrom={0}
    //             arrows={true}
    //             autoPlaySpeed={1000}
    //             centerMode={true}
    //             className=""
    //             dotListClass=""
    //             draggable={false}
    //             focusOnSelect={false}
    //             infinite={false}
    //             customTransition="transform 500ms ease-in-out"
    //             keyBoardControl={false}
    //             minimumTouchDrag={80}
    //             pauseOnHover={false}
    //             renderArrowsWhenDisabled={false}
    //             renderButtonGroupOutside={false}
    //             renderDotsOutside={false}
    //             indexSelected={indexSelected}
    //             containerClass="CarouselItem-container"
    //             itemClass="CarouselItem-item"
    //         >

    //             {products.map((product, index) => {
    //                 return (
    //                     <div key={index} className={'ProductSlider-item ' + (index == indexSelected ? 'active' : '')} >
    //                         <img 
    //                             src={product.image}
    //                             className='ProductSlider-img' 
    //                             style={{width: (index == indexSelected ? '100%' : '')}}
    //                         />
    //                         <div>{product.title}</div>
    //                     </div>
    //                 )
    //             })}
    //         </CarouselItem>
    //     )
    // }

    return (
        <Box className="OurProducts-container">
            <Typography variant='h1' marginTop='80px' color='primary'>Our Products</Typography>
            <Typography variant='h3' marginTop='16px' color='primary'>Discover our range of products we can offer you.</Typography>
            <Typography variant='h3' marginTop='5px'>Deep in our range of snacks and tex-mex options, and find your best solution.</Typography>
            <Box maxWidth='50%' width='100%' margin='0 auto' marginTop='50px'>
                <SearchProduct 
                    products={products} 
                    value={value} 
                    setValue={setValue} 
                    inputValue={inputValue} 
                    setInputValue={setInputValue} 
                    indexSelected={indexSelected} 
                    setIndexSelected={setIndexSelected}
                />
            </Box>
            {/* <ProductsSlider indexSelected={indexSelected} slidePixels={slidePixels}/> */}
            <Box className='ProductsSlider-container'>
                <div className='ProductsSlider-translate' style={{transform: 'translateX('+slidePixels+'px)'}}>
                    {products.map((product, index) => {
                        return (
                            <div key={index} className={'ProductSlider-item ' + (index == indexSelected ? 'active' : '')}>
                                <img 
                                    src={product.image}
                                    className='ProductSlider-img' 
                                    style={{width: (index == indexSelected ? '100%' : '')}}
                                />
                                <div>{product.title}</div>
                            </div>
                        )
                    })}
                </div>
            </Box>
        </Box>
    );
};

export default OurProducts;
