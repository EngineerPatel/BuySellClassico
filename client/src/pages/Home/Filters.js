import React, { useEffect } from 'react'
const categories=[
    {
        name:"Electronics",
        value:"electronics"
    },
    {
        name:"Books",
        value:"book"
    },
    {
        name:"Bicycle",
        value:"bicycle"
    },
    {
        name:"Sports",
        value:"sports"
    },
    {
        name:"Air Coolers",
        value:"cooler"
    },
];
const ages=[
    {
        name:"0-1 years old",
        value:"0-1"
    },
    {
        name:"2-3 years old",
        value:"1-3",
    },{
        name:"3-5 years old",
        value:"3-5"
    }
];
function Filters({showFilters,setShowFilters,filters,setFilters}) {
  
  return (
    <div className='w-72 flex flex-col'>
      <div className='flex justify-between'>
          <h1 className='text-orange-900 text-xl'>Filters</h1>
          <i className="ri-close-line cursor-pointer" 
          onClick={()=>setShowFilters(!showFilters)}></i>
          
      </div>
      <div className='flex flex-col gap-1 mt-5'>
                <h1 className='text-gray-600'>Categories</h1>
                <div className='flex flex-col'>
                    {categories.map((category)=>{
                        return <div className='flex items-center gap-2'>
                                <input type='checkbox'
                                className='max-width'
                                name='category'
                                checked={filters.category.includes(category.value)}
                                onChange={(e)=>{
                                if(e.target.checked){
                                    setFilters({
                                        ...filters, category:[...filters.category,category.value]
                                    })
                                }
                                else{
                                    setFilters({
                                        ...filters,
                                        category:filters.category.filter(
                                            (item)=>item!==category.value
                                        )
                                    })
                                }     
                                }}/>
                                <label htmlFor='category'>{category.name}</label>
                            </div>
                    })
 }
                </div>
                <h1 className='text-gray-600 mt-5'>Ages</h1>
                <div className='flex flex-col'>
                    {ages.map((age)=>{
                        return <div className='flex gap-2 items-center'>
                               <input
                               type='checkbox'
                               name='age'
                               className='max-width'
                               checked={filters.age.includes(age.value)}
                               onChange={(e)=>{
                                if(e.target.checked){
                                    setFilters({
                                        ...filters,
                                        age:[...filters.age,age.value]
                                    })
                                }
                                else{
                                    setFilters({
                                        ...filters,
                                        age: filters.age.filter(
                                            (item)=>item!==age.value
                                        )
                                    })
                                }
                               }}/>
                               <label htmlFor='age'>{age.name}</label>
                            </div>
                    })}
                </div>
          </div>
    </div>
  )
}

export default Filters;