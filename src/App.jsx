import { useContext } from 'react';
import { CoinContext } from './context/CoinContext';


function App() {
  const [allCoins, currency] = useState(0)

  return (
    <>
    <div>
      <h1>Coin data</h1>
      {allCoins.length === 0 ? (
        <p>Loading...</p>
      ): (
        <ul>
          {allCoins.map((coin) => (
            <li key={coin.id}>
              {coin.name} - {currency.symbol}{coin.current_price}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default App
