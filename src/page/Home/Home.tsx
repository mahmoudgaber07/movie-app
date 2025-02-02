import Banner from "./component/Banner"
import Movies from "./component/Movies"

const Home = () => {
  return (
    <div className='container-fluid'>
      <Banner />
      <Movies />
    </div>
  )
}

export default Home