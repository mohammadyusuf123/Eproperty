import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faSignal, faWarehouse, faHeart } from '@fortawesome/free-solid-svg-icons'

const FeaturedProp = ({ properties, filterValue }) => {
    const data = filterValue.length > 0 ? filterValue : properties
    return (
        <div className='property-list  grid grid-cols-3 gap-8 place-items-center '>
            {data === 'no result found' ? <div class="badge badge-error gap-2  place-self-center top-50 left-50">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>{data}</div> : data.map((property) => (
                <div className='relative box-content mx-3 w-80 h-fit rounded-lg border border-gray-400  hover:drop-shadow-lg '>
                    <div className='z-0 m-0 w-fit'>
                        <img className='rounded-t-lg' src={property.propertyImage} alt={property.propAlt} srcset="" />
                    </div>

                    <div className='text-white bg-primary px-4 py-1 text-xs rounded absolute top-3 left-3 z-10'>FEATURED</div>

                    <div className='text-white bg-darker  px-4 py-1 text-xs rounded absolute top-3 right-3 z-10'>FOR SALE</div>

                    <div class="absolute w-12 h-12 bottom-44 right-3">
                        <img class="rounded-full shadow-sm" src={property.owner} alt="Owner" />
                    </div>

                    <div className='px-3 py-5'>
                        <h1 className='text-dark text-sm font-bold mb-3'>{property.propName}</h1>
                        <h2 className='text-gray-400 text-xs font-medium'>{property.perimeter} m<sup>2</sup> {property.propLocation}</h2>
                    </div>

                    <div className='flex flex-row px-3 pb-5 border-gray-400 border-b justify-between text-gray-400'>
                        <div className='flex flex-col items-center justify-center text-lg font-medium'>
                            <FontAwesomeIcon icon={faBed} />
                            <p className='pt-1 text-xs'>{property.numBeds} Beds</p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-lg font-medium'>
                            <FontAwesomeIcon icon={faBath} />
                            <p className='pt-1 text-xs'>{property.numBaths} Baths</p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-lg font-medium'>
                            <FontAwesomeIcon icon={faWarehouse} />
                            <p className='pt-1 text-xs'>{property.numGarage} Garage</p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-lg font-medium'>
                            <FontAwesomeIcon icon={faSignal} />
                            <p className='pt-1 text-xs'>{property.numFloor}th floor</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between px-3 py-3 items-center'>
                        <div className='font-bold text-sm text-dark'>
                            {property.price}
                        </div>

                        <div className='text-light'>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProp;