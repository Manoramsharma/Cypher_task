import styled, { css } from 'styled-components';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { importModalAction, walletAction } from "../redux/index";
import { getBalance, fetchTransactions } from '../api';
import { syncJobAction } from '../redux/index';
import { BALANCE, TRANSACTION } from '../App';

const Container = styled.form `
    position: absolute;
    box-sizing: border-box;
    border-radius: 8px;
    background: #171C23;
    width: 40%;
    left: 35%;
    top: 25%;
    display: flex;
    flex-direction: column;
`

const ModalText = styled.h4 `
    font-weight: 400;
    font-size: 24px;
    text-align: center;
`

const FormLabel = styled.h5 `
    margin: 0 50px;
    font-weight: 400;
    font-size: 12px;
    color: #A6A2A2;
    ${props => props.big && css`
        margin-top: 20px;
    `};
`

const FormInput = styled.input`
    margin: 0 50px;
    border: 1px solid rgba(197, 197, 197, 0.27);
    border-radius: 3px;
    height: 30px;
    font-size: 15px;
    margin-top: 5px;
    background-color:  #20242B;
    color: white;
    ${props => props.big && css`
        height: 80px;
    `};
`
const FormTextArea = styled.textarea`
    margin: 0 50px;
    background: #20242B;
    border: 1px solid rgba(197, 197, 197, 0.27);
    border-radius: 3px;
    margin-top: 5px;
    font-size: 15px;
    height: 80px;
    color: white;
`

const SubmitButton = styled.button `
    border: none;
    align-self: center;
    margin: 35px 0px;
    font-weight: 700;
    font-size: 14px;
    width: 80px;
    background: #DB953C;
    border-radius: 4px;
    color: #FFFFFF;
    text-align: center;
    padding: 8px 15px;
    cursor: pointer;
`

const CloseButton = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 10px;
    margin-left: auto;
`

const WalletModal = (props) => {
    const dispatch = useDispatch();
    const { closeModal } = bindActionCreators(importModalAction, dispatch);
    const { addWallet } = bindActionCreators(walletAction, dispatch);
    

    const [wallet, setWallet] = useState({
        name: '',
        mnemonics:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addWallet(wallet);
        closeModal();
    }

    const handleChange = (e) => {
        setWallet({
            ...wallet,
            [e.target.name]: e.target.value
        }) 
    }

    return (
        <Container onSubmit={handleSubmit}>
            <ModalText>
                Import Wallet
                <CloseButton onClick={()=> closeModal()}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9753 13.172C14.395 13.5964 14.3272 14.2267 13.8234 14.5801C13.6103 14.7301 13.3414 14.8122 13.0637 14.8121C12.7234 14.8121 12.3857 14.6895 12.1512 14.4521L7.12489 9.34702L2.10028 14.4251C1.86545 14.6624 1.52805 14.7851 1.18776 14.7851C0.910086 14.7852 0.641211 14.7031 0.428129 14.5532C-0.0758163 14.1998 -0.143726 13.5694 0.276203 13.1451L5.57913 7.78571L0.275313 2.45329C-0.144506 2.02891 -0.0766698 1.3986 0.427387 1.04517C0.93059 0.690792 1.67909 0.747792 2.09954 1.1731L7.12489 6.25015L12.1495 1.17204C12.5688 0.747667 13.3177 0.690167 13.8216 1.0441C14.3256 1.39754 14.3935 2.02785 13.9736 2.45223L8.67064 7.81159L13.9753 13.172Z" fill="white"/>
                    </svg>
                </CloseButton>
            </ModalText>
            <FormLabel>
                Enter your wallet name :
            </FormLabel>
            <FormInput required name="name" value={wallet.name} onChange={handleChange}/>

            <FormLabel big>
                Enter your Mnemonics :
            </FormLabel>
            <FormTextArea required name="mnemonics" value={wallet.mnemonics} onChange={handleChange}/>
            
            <SubmitButton>
                Submit
            </SubmitButton>
        </Container>
    )
}

export default WalletModal;