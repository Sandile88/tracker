import { createContext, useEffect, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })


    const fetchAllCoins = async () => {
        const options = {
            method: 'GET'
        };

        try {
            const results = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await results.json();
            setAllCoins(data);

            await fetch('http://localhost:8082/save-coins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
        } catch (err) {
            console.error(err);
            
        }
    };


    // const fetchAllCoins = async () => {
        
    //     const options = {
    //         method: 'GET'
    //     }
    //     fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
    //     .then(res => res.json())
    //     .then(res => setAllCoins(res))
    //     .catch(err => console.error(err));
    // }
    // console.log(fetchAllCoins());


    useEffect(() => {
        fetchAllCoins();
    }, [currency])

    const contextValue = {
        allCoins, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )

}


export {CoinContextProvider};