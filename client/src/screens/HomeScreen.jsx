import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

function HomeScreen () {
    //import useDispatch from react-redux
    const dispatch = useDispatch();
    // get all productList (products, loading,  error) from redux store using useSelector
    // useSelector accepts a function with state as parameter. 
    // state is what defined in store.js (combineReducers)
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

    console.log('Home Screen');

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    //When page first load, fetch product data from backend 
    useEffect(() => {
        // use dispatch to replace axios product fetch and set loading, error. Make sure to call listProducts function 
        dispatch(listProducts());
        window.adobeDataLayer = window.adobeDataLayer || [];
    if(userInfo) {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
                "pageName": "Home Page", 
                "pageType": "Home",
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
    } else {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
            "pageName": "Home Page", 
            "pageType": "Home",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // use dispatch to replace axios product fetch and set loading, error. Make sure to call listProducts function 
    if(userInfo) {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
                "pageName": "Home Page", 
                "pageType": "Home",
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
    } else {
        window.adobeDataLayer.push({
            "event":"pageLoaded",
            "pageInfo": {
            "pageName": "Home Page", 
            "pageType": "Home",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo]);

    return (
        <div>
            {
                loading ? <LoadingBox />
                    : error ? <MessageBox variant="danger"> {error} </MessageBox> 
                        : ( <div className='row center'>
                        <div class="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div className="main-border-button">
                                    <Link to='/productList'>
                                        Purchase Now!
                                    </Link>
                                </div>
                            </div>
                            <img src="/images/left-banner-image.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Women</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to='/women'>
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-01.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Men</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to='/men'>
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-02.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Kids</h4>
                                            <span>Best Clothes For Kids</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Kids</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to='/kid'>
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-03.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Accessories</h4>
                                            <span>Best Trend Accessories</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Accessories</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to='/accessories'>
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-04.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			    </div> )
            }
			
        </div>
    );
}

export default HomeScreen;
