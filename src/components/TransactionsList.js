import styled, { css } from 'styled-components';
import { useSelector } from "react-redux"
import TransactionInfo from './TransactionInfo';

const Container = styled.div `
    margin-top: 15vh;
    margin-left: 6vh;
    width: 70%;
    background-color: #000;
    color: white;
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

const TransactionWrapper = styled.div `
    overflow-y:auto;
    height:60vh;
`

const TransactionsList = (props) => {
    const allTxs = useSelector((state) => state.transactions);

    const allTxList = allTxs.map((Tx, ind)=> {
        return <TransactionInfo key={ind} timestamp={Tx.received} wallet={Tx.walletName} amount={Tx.total} recieve={Tx.ver==2} success={Tx.confirmed!==undefined}/>
    })
    return (
        <Container>

            <TableText>
                Total Transactions - {allTxs.length}
            </TableText>

            <Line/>

            <LabelWrapper>
                <LabelItem first>Coin</LabelItem>
                <LabelItem>Wallet</LabelItem>
                <LabelItem>Amount</LabelItem>
                <LabelItem>Result</LabelItem>
                <LabelItem>Status</LabelItem>
            </LabelWrapper>

            <TransactionWrapper>
                {allTxList}
            </TransactionWrapper>
            
        </Container>
    )
}

export default TransactionsList;