import axios from 'axios';
import { mnemonisToaddress } from './utils';

export async function getBalance(walletMnemonics) {
    const allAddress = mnemonisToaddress(walletMnemonics);
    const balanceRequests =  allAddress.map((address)=> {
        return () => axios.get(`${process.env.REACT_APP_API_URL}/addrs/${address}?token=${process.env.REACT_APP_API_KEY}`);
    })
    return balanceRequests;
}

export async function fetchTransactions(walletMnemonics) {
    const allAddress = mnemonisToaddress(walletMnemonics);
    const txRequests = allAddress.map((address)=> {
        return () => axios.get(`${process.env.REACT_APP_API_URL}/addrs/${address}/full?token=${process.env.REACT_APP_API_KEY}`);
    })
    return txRequests;
}