import { useLocation} from "react-router-dom"

const SingleProduct = () => {

    //const {id}=useParams();
    const location=useLocation();
    console.log(location);
  return (
    <div>
      {`inside ${location.state.title}`}
    </div>
  )
}

export default SingleProduct
