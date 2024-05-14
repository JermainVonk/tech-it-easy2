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
            <span className='tv-name'>{generatingString(bestSellingTv)}</span>

            <span className='tv-price'>{generatingPrice(bestSellingTv)}</span>

            <span className='tv-size'>{generateSizeString}</span>

            <span><img className='check-image' src={check}/>wifi<img className='minus-image' src={minus}/>speech<img className='check-image' src={check}/>hdr<img className='check-image' src={check}/>bluetooth<img className='minus-image' src={minus}/>ambilight</span>
          </div>
        </div>
    </>
  )
}

export default App
