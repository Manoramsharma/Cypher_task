import styled, { css } from 'styled-components';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { importModalAction } from "../redux/index"
import ImportModal from './ImportModal';
import WalletInfo from './WalletInfo';

const Container = styled.div `
    margin-top: 15vh;
    margin-left: 6vh;
    width: 70%;
    background-color: #000;
    color: white;
`

const ImportDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const ImportBtn = styled.button`
    display: flex;
    align-items: center;
    background: #191E26;
    border: 0.5px solid #242830;
    border-radius: 5px;
    color: #BEB4A8;
    padding: 7px 15px;
    cursor: pointer;
`

const BtnText = styled.h3 `
    margin-left: 8px;
    font-weight: 600;
    font-size: 12px;
`

const TableText = styled.h5 `
    font-weight: 600;
    font-size: 12px;
    color: #ADABAA;
`
const Line = styled.div `
    border: 1px solid #1A1F26;
`
const LabelWrapper = styled.div `
    display: flex;
`
const LabelItem = styled.h6 `
    flex:1;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    color: #474848;
    ${props => props.first && css`
        justify-content: flex-start;
    `};
`

const Wallets = (props) => {
    const isOpen = useSelector((state) => state.isModalOpen);
    const allWallets = useSelector((state) => state.allWallets);
    const dispatch = useDispatch();
    const {openModal} = bindActionCreators(importModalAction, dispatch);

    const walletsList = allWallets.map((wallet, ind)=> {
        return <WalletInfo key={ind} name={wallet.name} balance={wallet.balance}/>
    })
    return (
        <Container>
            {isOpen && <ImportModal/>}
            <ImportDiv>
                <ImportBtn onClick={()=> openModal()}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#85633E"/>
                        <path d="M5.208 9.3202H7.74V11.8522H9.252V9.3202H11.784V7.80819H9.252V5.2762H7.74V7.80819H5.208V9.3202Z" fill="white"/>
                    </svg>
                    <BtnText>
                        Import Wallet
                    </BtnText>
                </ImportBtn>
            </ImportDiv>

            <TableText>
                Total Coins - {allWallets.length}
            </TableText>

            <Line/>

            <LabelWrapper>
                <LabelItem first>Coin</LabelItem>
                <LabelItem>Holding</LabelItem>
                <LabelItem>Actions</LabelItem>
            </LabelWrapper>
            {walletsList}
            
        </Container>
    )
}

export default Wallets;