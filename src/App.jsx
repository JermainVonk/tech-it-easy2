import './App.css';
import calculateTvsSold from "./helpers/calculateTvsSold.js";
import calculateTvsPurchased from "./helpers/calculateTvsPurchased.js";
import {calculateNumberToSell} from "./helpers/calculateNumberToSell.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import generatingString from "./helpers/generatingString.js";
import generatingPrice from "./helpers/generatingPrice.js";
import {generateSizeString} from "./helpers/generateSizeString.js";
import check from './assets/check.png';
import minus from './assets/minus.png';

function App() {
  return (
    <>
        <h1>Tech it easy dashboard</h1>
        <h3>Verkoopoverzicht</h3>
        <div className='container'>
            <div className={'green'}>
                <h1>Aantal verkochte producten</h1>
                <p>{calculateTvsSold(inventory)}</p>
            </div>
            <div className={'blue'}>
                <h1>Aantal ingekochte producten</h1>
                <p>{calculateTvsPurchased(inventory)}</p>
            </div>
            <div className={'red'}>
                <h1>Aantal te verkopen producten</h1>
                <p>{calculateNumberToSell(inventory)}</p>
            </div>

        </div>
        <h3>Best verkochte tv</h3>

        <div className='container2'>
          <img className='tv-image' src={bestSellingTv.sourceImg} alt="tv-picture"/>
          <div className='container3'>
              <div className='tv-info'>
            <span>{generatingString(bestSellingTv)}</span>

            <span>€{generatingPrice(bestSellingTv)},-</span>

            <span>{generateSizeString(bestSellingTv)}</span>

            <span><img className='check-image' src={check}/>wifi<img className='minus-image' src={minus}/>speech<img className='check-image' src={check}/>hdr<img className='check-image' src={check}/>bluetooth<img className='minus-image' src={minus}/>ambilight</span>
              </div>
              </div>
        </div>
        <div>
            <h1>Alle tvs</h1>
            <button className='button'>Meest verkocht eerst</button>
            <button className='button'>Goedkoopste eerst</button>
            <button className='button'>Meest geschikt voor sport eerst</button>
            <ul>
                {inventory.map((product) => (
                    <li key={product.type}>
                        <h2>{product.brand}</h2>
                        <div className='container2'>
                        <img className='tv-image' src={product['sourceImg']} alt="tv-pic"/>
                        <div className='container3'>
                        <div className='tv-info'>
                        <span>{generatingString(product)}</span>

                        <span>€{generatingPrice(product)},-</span>

                        <span>{generateSizeString(product)}</span>

                        <span>{}</span>
                        {/* Ben niet verder dan opdracht 2c gekomen. Heb echt moeite gehad met deze opdracht tech-it-easy zou echt opbouwende feedback willen krijgen en wat hulp zodat ik de opdracht toch kan doen.     */}

                        </div>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    </>
  )
}

export default App
