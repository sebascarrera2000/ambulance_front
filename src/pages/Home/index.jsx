// import link
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Link to='/about'>about</Link>
            <div>HOLA DESDE HOME</div>
        </>
    )
}

export { Home };