import { useSelector } from "react-redux";

function First(){
    const {value} = useSelector((state)=>state.data);
    const {headOfficeAddress} = useSelector(state=>state.address);
    return <>
      <h1>It is First component : {value} {headOfficeAddress}</h1>
    </>
}

export default First;