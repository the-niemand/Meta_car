import React, { createContext, useEffect, useMemo, useState } from 'react';
import HeroCar from '../assets/HeroImages/HeroTopImg.png';
import Sidebar from '../components/Sidebar/SidebarFilter';
import axios from 'axios';
import Pagination from '../components/Pagination';

function ModelCard({ index, modelImg, modelName, modelComp, modelTrans, modelP, modelDoor, modelColor, modelMetre }) {


  return (
    <div key={index} className='bg-white rounded-xl shadow-md' style={{ width: "350px", height: "450px" }}>
      <img src={modelImg} className='object-cover h-[250px] rounded-t-xl w-full' alt="" />
      <div className='p-5 px-6 flex flex-col gap-3'>
        <span className='flex justify-between items-center'>

          <h1 className='font-[700] text-[22px]' style={{
            whiteSpace: 'nowrap',
            width: '140px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }} title={modelName}>{modelName}</h1>

          <span className='font-[700] text-[16px]'> {modelP}$<span className='font-[400] text-[16px]'>/day</span> </span>
        </span>
        <span className='flex justify-between'>kilometer<span className='flex gap-1 text-accent'>{modelMetre} km</span> </span>
        <span className='flex justify-between text-[18px] '>
          <span className='font-[500] text-darkish flex gap-3 items-center'>{modelComp === "other" ? "other brand" : modelComp}</span>
          <span className='flex gap-3 items-center text-darkish'>{modelDoor}</span>
        </span>
        <span className='flex justify-between text-[18px] '>
          <span className='font-[500] text-darkish  flex gap-3 items-center'>{modelTrans} </span>
          <span className='flex gap-3 items-center text-darkish'>{modelColor === "other" ? "other color" : modelColor}</span>

        </span>
      </div>
    </div>
  );
}

export const FilterContext = createContext(null);

function Models() {
  const [filter, setFilter] = useState({
    brand: 'all',
    price: 'all',
    color: 'all'
  });

  const filterValue = { filter, setFilter };
  const [carModels, setCarModels] = useState();
  const [filteredCarModels, setFilteredCarModels] = useState();

  const [currentPage, setCurrentPage] = useState(1)
  const [postsperpage, setPostsperpage] = useState(6)

  const lastPostIndex = currentPage * postsperpage
  const firstPostIndex = lastPostIndex - postsperpage



  useMemo(() => {
    const fetchCars = async () => {
      try {
        const fetchUrl = `https://meta-car-admin-backend.onrender.com/car/fetchCars`;
        const response = await axios.get(fetchUrl);
        setCarModels(response.data.data);
        setFilteredCarModels(response.data.data);
      } catch (error) {
        console.log('Error fetching books:', error);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (filteredCarModels && carModels) {
      let newFilteredCarModels = carModels;

      if (filter.brand !== "all") {
        if (filter.brand !== "Other") {
          newFilteredCarModels = newFilteredCarModels.filter((car) => car.brand.toLowerCase() === filter.brand.toLowerCase());
        } else {
          const excludedBrands = ['audi', 'bmw', 'mercedes', 'volkswagen'];
          newFilteredCarModels = newFilteredCarModels.filter((car) => !excludedBrands.includes(car.brand.toLowerCase()));
        }
      }

      if (filter.price !== "all") {
        if (filter.price !== "200") {
          const minPrice = parseInt(filter.price) - 50;
          const maxPrice = parseInt(filter.price);
          newFilteredCarModels = newFilteredCarModels.filter((car) => car.price >= minPrice && car.price <= maxPrice);
        } else {
          newFilteredCarModels = newFilteredCarModels.filter((car) => car.price >= 150);
        }
      }

      if (filter.color !== "all") {
        newFilteredCarModels = newFilteredCarModels.filter((car) => car.color.toLowerCase() === filter.color.toLowerCase());
      }

      setFilteredCarModels(newFilteredCarModels);
    }

    console.log(filter);
  }, [filter]);


  return (
    <FilterContext.Provider value={filterValue}>
      <div className='relative z-[4]' >
        <div className='relative top-[-100px] z-[4] h-[410px] w-[100vw]'>
          <img src={HeroCar} className='h-full object-cover w-full relative z-[2]' alt="" />
          <h1 className='absolute z-[5] top-0 flex flex-col max-lg:text-center justify-center px-[67px] text-black font-[700] text-[38px]  h-full w-full'>
            Models
            <span className='font-[400] text-[16px]'>Home/Models</span>
          </h1>
          <h1 className='absolute z-[3] top-0 bg-white opacity-[90%] text-black font-[700] text-[48px] text-center h-full w-full'></h1>
        </div>
        <div className='flex items-start justify-center gap-4 w-full p-12'>
          <Sidebar />
          <div className="w-full" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap: "4rem" }}>
            {filteredCarModels && (
              filteredCarModels.slice(firstPostIndex, lastPostIndex).map((car, index) => (
                <ModelCard
                  key={index}
                  modelMetre={car.kilometers}
                  modelImg={`https://meta-car-admin-backend.onrender.com/${car.image}`}
                  modelName={car.title}
                  modelComp={car.brand}
                  modelTrans={car.type}
                  modelP={car.price}
                  modelDoor={car.size}
                  modelColor={car.color}
                  index={index}
                />
              ))
            )}
            {
              filteredCarModels && (
                <div className='w-full flex items-center justify-center'>
                  <Pagination totalPosts={filteredCarModels.length} postsPerPage={postsperpage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
}

export default Models;


