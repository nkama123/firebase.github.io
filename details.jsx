import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.graphql.jobs/')
        .then((res) => {return res.json() })
        .then((_data) => {setData(_data) })
        .catch((err) => {console.log(err)})
        .finally(() => {console.log('done!')})

    },[])





    return (
        <>
        <div className="container-fluid mt-4">
            <div className="card">
        <div className="list-group">

            {data.map((action) => 
     
        <a href="#" class="list-group-item list-group-item-action">{ action.title}</a>
            )}
        
        </div>
        </div>
        </div>


            {/*https://jsonplaceholder.typicode.com/posts*/}
        </>
    )
}
export default Details