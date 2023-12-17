import React, {ChangeEvent, useState} from "react";


interface Product{
    _id:string,
    name:string,
    description:string,
    image:string
    unitPrice:number
    qtyOnHand:number
}

const Product:React.FC = ()=>{

    const [products, setProducts]=useState<Product[]>([]);
    const [image, setImage]=useState<File | null>(null);




    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [unitPrice,setUnitPrice]=useState<number | ''>('');
    const [qtyOnHand,setQtyOnHand]=useState<number | ''>('');


    const handleImageChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const saveProduct=()=>{
        /*if(image){
            const ref = ref(storage, `images/${Math.random()+'-'+image.name}`)
            ref.put(image).then(()=>{
                storageRef.getDownloadURL().then((url)=>{
                    console.log(url);
                });
            })
        }*/
    }


    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    return (
        <>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" onChange={(e)=>setName(e.target.name)} className='form-control' id='productName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input  onChange={(e)=>setUnitPrice(parseFloat(e.target.name))} type="number" className='form-control' id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">QTY On Hand</label>
                            <input onChange={(e)=>setQtyOnHand(parseFloat(e.target.name))} type="number" className='form-control' id='qty'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Product Image</label>
                            <input onChange={handleImageChange}
                                   type="file" className='form-control' id='image'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={(e)=>setDescription(e.target.name)}  rows={5} className='form-control' id='description'/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveProduct}>Save Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type="search" className='form-control' placeholder='Search Products here'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">

                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>QTY On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See more</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>Nimal Bnadara</td>
                                <td>Colombo City</td>
                                <td>25000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-sm'>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-info btn-sm'>View</button>
                                </td>
                            </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Product;