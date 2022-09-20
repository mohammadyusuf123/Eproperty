import React, { useEffect, useState } from 'react';
import LandView from '../components/LandView';
import Navbar from '../components/Navbar';
import Options from '../components/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faPaperPlane, faLock, faFileInvoiceDollar, faClock, faSuitcase, faCalendarCheck, } from '@fortawesome/free-solid-svg-icons'
import Carousel from '../components/Carousel';
import FeaturedProp from '../components/FeaturedProp';
import About from '../components/About';
import Rating from '../components/Rating';
import f1 from '../assets/images/f1.png'

const Home = () => {
    const [filterData, setFilterData] = useState([])
    const [filterValue, setFilterValue] = useState([])

    const [properties,setProperties] = useState([
        {propertyImage: require('../assets/images/2.jpg'), location:"Mumbai", propAlt: "living room with large window", owner: require('../assets/images/p3.jpg'), propName: "Lilys' Apartment", perimeter: 120, propLocation: 'Chavchavadze Ave. 21', numBeds: 3, numBaths: 2, numGarage: 1, numFloor: 12, price: '$100,000'},
        {propertyImage: require('../assets/images/4.jpg'),location:"Kolkata", propAlt: "perfectly lit white living room", owner: require('../assets/images/p5.jpg'), propName: "Your Lux House", perimeter: 160, propLocation: 'Chavchavadze Ave. 71', numBeds: 4, numBaths: 4, numGarage: 1, numFloor: 19, price: '$180,000'},
        {propertyImage: require('../assets/images/1.jpg'),location:"Chennai",location:"Goa",propAlt: "living room with kitchen in the background", owner: require('../assets/images/p2.jpg'), propName: "Apartment At The Heart Of The City", perimeter: 90, propLocation: 'Rustaveli Ave. 2', numBeds: 1, numBaths: 1, numGarage: 1, numFloor: 2, price: '$70,000'},
        {propertyImage: require('../assets/images/3.jpg'),location:"Bangalore", propAlt: "living room with kitchen in the background", owner: require('../assets/images/p6.jpg'), propName: "Nihal's Apartment", perimeter: 320, propLocation: 'Rustaveli Ave. 2', numBeds: 3, numBaths: 2, numGarage:3, numFloor: 5, price: '$170,00'},
        {propertyImage: require('../assets/images/7.jpg'),location:"Ahmedabad",propAlt: "living room with kitchen in the background", owner: require('../assets/images/p7.jpg'), propName: "Private Apartment", perimeter: 120, propLocation: 'Rustaveli Sec. 12', numBeds: 2, numBaths: 1, numGarage: 1, numFloor: 7, price: '$80,000'},
        {propertyImage: require('../assets/images/8.jpg'), location:"Delhi", propAlt: "living room with kitchen in the background", owner: require('../assets/images/p8.jpg'), propName: "Zisan's  lux Apartment", perimeter: 190, propLocation: 'Rustaveli Ave. 2', numBeds: 4, numBaths: 2, numGarage: 2, numFloor: 22, price: '$190,000'},
        {propertyImage: require('../assets/images/9.jpg'),location:"Rajasthan", propAlt: "living room with kitchen in the background", owner: require('../assets/images/p9.jpg'), propName: "Azim's Public Apartment", perimeter: 150, propLocation: 'Rustaveli Ave. 2', numBeds: 2, numBaths: 1, numGarage: 1, numFloor: 27, price: '$120,000'},
        {propertyImage: require('../assets/images/10.jpg'),location:"Lucknow",propAlt: "living room with kitchen in the background", owner: require('../assets/images/p10.jpg'), propName: "Nissan's House", perimeter: 140, propLocation: 'Rustaveli Ave. 2', numBeds: 1, numBaths: 1, numGarage: 1, numFloor: 32, price: '$50,000'},
        {propertyImage: require('../assets/images/11.jpg'),location:"Punjab", propAlt: "living room with kitchen in the background", owner: require('../assets/images/p11.jpg'), propName: "Farhad's Apartment", perimeter: 70, propLocation: 'Rustaveli Ave. 2', numBeds: 3, numBaths: 2, numGarage: 1, numFloor: 9, price: '$90,000'},
    ])

    const [options,] = useState([
        { title: 'Find Your Dream House', description: 'We provide various types of houses from the cheapest to Premium', icon: <FontAwesomeIcon icon={faPaperPlane} /> },
        { title: 'Best Quality Guarantee', description: 'If you buy or rent a house with us you are guaranteed with the best quality', icon: <FontAwesomeIcon icon={faShieldHalved} /> },
        { title: '100% Safe Transactions', description: 'Your transactions will always be kept safe and confidential no matter what', icon: <FontAwesomeIcon icon={faLock} /> },
        { title: 'Low Cost on Taxes', description: 'Buying or renting a house through our company you get discounts on taxes', icon: <FontAwesomeIcon icon={faFileInvoiceDollar} /> }
    ])

    

    useEffect(() => {
        let data = [];
        if (filterData.length !== 0) {
            if (filterData.location !== 'Select a location' && filterData.type !== 'Select any type' && filterData.price !== 'Select price') {
                data = properties.filter((value) =>
                    filterData.type == value.propName && filterData.price === value.price)

            }
            else if (filterData.location !== 'Select a location' && filterData.type !== 'Select any type') {
                data = properties.filter((value) =>
                    filterData.location === value.location && filterData.type == value.propName)

            }
            else if (filterData.price !== 'Select price' && filterData.location !== 'Select a location') {
                data = properties.filter((value) =>
                    filterData.price === value.price && filterData.location === value.location)

            }
            else if (filterData.price !== 'Select price' && filterData.type !== 'Select any type') {
                data = properties.filter((value) =>
                    filterData.price === value.price && filterData.type == value.propName)

            }
            else if (filterData.location !== 'Select a location') {
                data = properties.filter((value) =>
                    filterData.location === value.location)

            }
            else if (filterData.price !== 'Select price') {
                data = properties.filter((value) =>
                    filterData.price === value.price)

            }
            else if (filterData.type !== 'Select any type') {
                data = properties.filter((value) =>
                    filterData.type == value.propName)

            }
            else {
                data = 'no result found'
            }
            setFilterValue(data.length ? data : 'no result found')
        }

        console.log(filterData)
    }, [filterData])


    const [ratings,] = useState([
        { description: "Having to get services like buying a house just by visiting a website and booking an appointment wasn't quite a thing for me. But, now Estately change my point of view concerning Real Estates.", author: 'Arthuro Guevara', position: 'Client' },
        { description: 'I always have hard times working with real estate agencies, but with estately whole process was easy, smooth and quick! Agent Lucas is professional at what he does so its very comfortable working with him', author: 'Manuel Ramirez', position: 'Investor' }
    ])

    return (
        <div className='mx-8 mb-8'>
            <Navbar />
            <LandView properties={properties} setFilterData={setFilterData} />
            <Options options={options} />
            <div className='flex flex-col my-24'>
                <div className='flex flex-col items-center justify-center mb-20'>
                    <h1 className='text-darker font-bold text-4xl mb-5'>Discover Our Featured Properties</h1>
                    <h2 className='text-gray-400 text-base font-medium'>Discover best deals for your future house</h2>
                </div>
                <FeaturedProp properties={properties} filterValue={filterValue} />
                <Carousel />
            </div>
            <About />
            <Rating ratings={ratings} />
            <div>
                <img src={f1} alt="Pixel light-blue world mad" srcset="" />
            </div>

        </div>
    );
};

export default Home;