import { Link } from 'react-router-dom';



export default function Footer() {
  


  return (
<div className='footer text-center text-white'>
    Created By: {" "}
    <Link key={1} className="text-warning" to="https://github.com/codyleight">
            Cody Thompson 
          </Link> {" "}
          <Link key={1} className="text-primary" to="https://github.com/bolfati">
            Bijan Olfati
          </Link> {" "}
          <Link key={1} className="text-danger" to="https://github.com/Jaysahhn">
            Jason Mason
          </Link>
</div>
  );
}
