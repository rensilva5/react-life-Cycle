import './beercard.css'

function Beercard ({beer}) {
    return (
        <div className='beerCard'>
            <img src={beer.image} alt=''/>
        <h2>{beer.name}</h2>
        <p>{beer.price}</p>
        </div>
    )
}

export default Beercard