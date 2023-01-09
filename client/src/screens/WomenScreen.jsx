import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listCategoryProducts } from '../actions/productActions';

function WomenScreen() {
    //import useDispatch from react-redux
    const dispatch = useDispatch();
    // get all productList (products, loading,  error) from redux store using useSelector
    // useSelector accepts a function with state as parameter. 
    // state is what defined in store.js (combineReducers)
    const productList = useSelector(state => state.productListCategory);
    const { products, loading, error } = productList;

    //When page first load, fetch product data from backend 
    useEffect(() => {
        // use dispatch to replace axios product fetch and set loading, error. Make sure to call listProducts function 
        dispatch(listCategoryProducts("Women"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    if(userInfo) {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
                "pageName": "Women-Landing Page", 
                "pageType": "Landing Page",
                "category": "Women"
            },
            "user": {
                "userId":userInfo.encryptedUserId,
                "loginStatus":"true"
            },
            "attributes": {
                "country": "Middle-east",
                "language": "en-US"
            }
            });

        console.log("UserId"+userInfo.encryptedUserId);
    } else {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
                "pageName": "Women-Landing Page", 
                "pageType": "Landing Page",
                "category": "Women"
            }, 
            "user": {
                "loginStatus":"false"
            },
            "attributes": {
                "country": "Middle-east",
                "language": "en-US"
            }
            });
    }

    return (
        <div>
            {
                loading ? <LoadingBox />
                    : error ? <MessageBox variant="danger"> {error} </MessageBox>
                    : (<div className='row'> { products.map(product => <Product key={product._id} product={product} />)} </div>)
            }
        </div>
    )
}

export default WomenScreen;