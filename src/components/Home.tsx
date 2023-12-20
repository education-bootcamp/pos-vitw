
import DefaultCard from "./cards/DefaultCard.tsx";
import DefaultChart from "./cards/DefaultChart.tsx";
import MinQtyCard from "./cards/MinQtyCard.tsx";
import AxiosInstance from '../config/axiosInstance.ts';
import React, {useEffect, useState} from "react";
import Product from "./Product.tsx";

const  Home:React.FC = ()=>{
    const [products, setProducts]=useState<Product[]>([]);
    const[productCount,setProductCount]=useState<number>();
    const[orderCount,setOrderCount]=useState<number>();
    const[customerCount,setCustomerCount]=useState<number>();
    const[income,setIncome]=useState<number>();
    useEffect(()=>{
        findAllProducts();

        findAllCounts();
    }, [])
    const findAllProducts= async ()=>{
        const response = await AxiosInstance.get('/products/find-all-min');
        setProducts(response.data);
    }

    const findAllCounts= async ()=>{
      const productCount = await AxiosInstance.get('/products/find-all-count');
        setProductCount(productCount.data);

        const customerCount = await AxiosInstance.get('/customers/find-count');
        setCustomerCount(customerCount.data);

        const orderCount = await AxiosInstance.get('/orders/find-count');
        setOrderCount(orderCount.data);

        const income = await AxiosInstance.get('/orders/find-income');
        setIncome(income.data.totalCostSum)
    }

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?w=740&t=st=1702482726~exp=1702483326~hmac=fb4ca3ec3a58df9736c0172c50551ef96768efabe18534aa3ee635b800b26507'
                            description='This is a wider card with'
                            title='Customers'
                            value={customerCount}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/young-man-working-warehouse-with-boxes_1303-16615.jpg?w=740&t=st=1702482783~exp=1702483383~hmac=7e416d3fc7f4f5fcc4c721ca5cc9f69d841c93bf6a27bfd4ad76e41ce3da5010'
                            description='This is a wider card with '
                            title='Products'
                            value={productCount}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/premium-photo/black-friday-composition-with-three-bags-cart_23-2147709333.jpg?w=740'
                            description='This is a wider card with supporting'
                            title='Orders'
                            value={orderCount}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/person-carrying-lot-cash_53876-65367.jpg?w=740&t=st=1702482890~exp=1702483490~hmac=2f80e70d6f5d8949c51877db9816a9fae2fcb07d8a7d3bbec21df8acde8e1be2'
                            description='This is a wider card with supporting text below.'
                            title='Income'
                            value={income}
                            key={1}
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="context">
                            <DefaultChart/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        {products.map((prod,index)=>(
                            <MinQtyCard name={prod.name} image={prod.image} description={prod.description} key={index} />
                            ))}

                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;