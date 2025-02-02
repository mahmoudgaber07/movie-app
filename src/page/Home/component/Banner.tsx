import { Link } from 'react-router-dom'
// import modelImg from '../../../assets/model_3.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-content text-center">
                <h2 className="main-title lg:text-4xl md:text-3xl text-2xl mb-4 text-white">#New Movies Collection 2025</h2>
                <h1 className="sub-title text-lg text-white">Arrivals Sales</h1>
                <div className="flex justify-center gap-4 mt-4">
                    <Link to="/" className="btn btn-black rounded-none ">Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner