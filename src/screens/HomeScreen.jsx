import {Row,Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import Product from '../components/Product';
import Spinner from 'react-bootstrap';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
const HomeScreen=()=>{
    
   const {data:products,isLoading,error}=useGetProductsQuery();
   
    return(
        <div>
        {isLoading ?(
           <Loader/>
        ):error ? (
         <Message variant='danger'>{error?.data?.message||error.error}</Message>
        ):(
        <>
        <h1>Latest Products</h1>
        
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                 <Product product={product}/>
                </Col>
            ))

            }
        </Row>
        </>
        )
        }
      
      </div>
    )
}

export default HomeScreen