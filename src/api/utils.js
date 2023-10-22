import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
import * as bitcoin from 'bitcoinjs-lib';
import {validateMnemonic,mnemonicToSeedSync} from 'bip39';

export const mnemonisToaddress = (mnemonics) => {

    const bip32 = BIP32Factory(ecc);
    const path = `m/49'/1'/0'/0`;
    const seed = mnemonicToSeedSync(mnemonics);
    let root = bip32.fromSeed(seed, bitcoin.networks.testnet);
    let allAddress= [];
    // can be increased to 20
    for (let i = 0; i < 5; i++) {
        const child = root.derivePath(`${path}/${i}`);
        const address = bitcoin.payments.p2pkh({ pubkey: child.publicKey,network: bitcoin.networks.testnet }).address;
        allAddress.push(address);
        console.log(allAddress,"addresses");
    }
    return allAddress;
}