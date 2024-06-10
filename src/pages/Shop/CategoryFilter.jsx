import { ProductContext } from '@/context/ProductContext'
import { productData } from '@/data'
import React, { useContext } from 'react'

const CategoryFilter = () => {
    const {setSelectCatFilter} = useContext(ProductContext)
    const groupByCategory = (productData) =>{
        return productData.reduce((acc,product)=>{
            if(!acc[product.category]){
                acc[product.category] = []
            }
            acc[product.category].push(product)
            return acc
        },{})
    }
    const groupedProducts = groupByCategory(productData)
  return (
    <>
    <div className='flex flex-col gap-2'>
        {
            Object.keys(groupedProducts).slice(0,6).map(category=>{
                return (
                    <div key={category.id} className='cursor-pointer font-medium hover:text-primary transition-all duration-300'>
                        <span  className='capitalize'>{category.split("-")[0]}</span>
                    </div>
                )
            })
        }
    </div>
    <div>
        <span>others</span>
    </div>
    </>
  )
}

export default CategoryFilter