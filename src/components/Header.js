import styled from 'styled-components';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { syncJobAction, transactionAction } from "../redux/index";
import { getBalance, fetchTransactions } from '../api';
import { BALANCE, TRANSACTION } from '../App';

const Container = styled.div `
    width: 100%;
    background-color: #000;
    color: #FFFFFF;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoWrapper = styled.div ` 
    margin-left: 25px;
    display: flex;
    align-items: center;
`
const LogoItem = styled.div `
    display: flex;
    flex-direction: column;
`
const LogoName = styled.h1 `
    margin-left: 10px;
    font-size: 15px;
    font-weight: 800;
`
const SyncH = styled.h2 `
    font-size: 17px;
    font-weight: 400;
    margin-right: 10px;
    color: #E0B36A;
`
const SyncDiv = styled.div `
    display: flex;
    margin-right: 10px;
    align-items: center;
`
const SyncBtn = styled.button `
    background-color: #0000;
    border: none;
    cursor: pointer;
`

const Header = (props) => {
    const inSync = useSelector((state) => state.inSync);
    const allWallets = useSelector((state) => state.allWallets);
    const dispatch = useDispatch();
    const { addJob } = bindActionCreators(syncJobAction, dispatch);
    const {deleteAll} = bindActionCreators(transactionAction, dispatch);

    const handleSync = () => {
        deleteAll();
        allWallets.forEach((wallet) => {
            const BalanceSyncjob = {
                name: BALANCE,
                walletName: wallet.name,
                task: () => getBalance(wallet.mnemonics)
            }
            const TransactionSyncjob = {
                name: TRANSACTION,
                walletName: wallet.name,
                task: () => fetchTransactions(wallet.mnemonics)
            }
            addJob(BalanceSyncjob);
            addJob(TransactionSyncjob);
        })
    }

    return (
        <Container> 
            <LogoWrapper>
                <LogoItem>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5398 2.62379L12.2369 0L18.9695 9.95925H12.4267L7.5141 2.70195L2.88059 9.30051L5.81701 9.32284L8.28449 5.82817L9.1442 7.13449L6.65439 10.6738H0L7.48061 0.0334947L13.2753 8.60828H16.2005L12.1811 2.73544L11.4107 3.91894L10.5398 2.62379Z" fill="white"/>
                    </svg>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5141 8.29816L12.4267 1.04086H18.9695L12.2369 11.0001L10.5398 8.37632L11.4107 7.08117L12.1811 8.26467L16.2005 2.39183H13.2753L7.48061 10.9666L0 0.326294H6.65439L9.1442 3.86562L8.28449 5.17194L5.81701 1.67727L2.88059 1.6996L7.5141 8.29816Z" fill="white"/>
                    </svg>
                </LogoItem>
                <LogoName>
                    cySync
                </LogoName>
            </LogoWrapper>
            <SyncDiv>
                <SyncH>
                    {inSync===true && <> Synced </>}
                    {inSync===false && <> Syncing </>}
                </SyncH>
                <SyncBtn onClick={handleSync}>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33334 4.03829L6.34125 4.03908C7.09923 4.1944 7.79472 4.5694 8.34101 5.11733C8.88848 5.6647 9.2636 6.36047 9.42005 7.11867C9.52682 7.64534 9.52655 8.1881 9.41926 8.71467C9.26395 9.47305 8.88865 10.1689 8.34021 10.7152L9.45963 11.8346C10.2259 11.0679 10.751 10.0937 10.9701 9.03213C11.1219 8.29597 11.1219 7.53658 10.9701 6.80042C10.7536 5.7383 10.2284 4.7637 9.46042 3.99871C8.95619 3.49269 8.35851 3.08939 7.70055 2.81121C7.36513 2.66921 7.01639 2.561 6.6595 2.48821C6.55105 2.46604 6.4418 2.45417 6.33334 2.43833V0L3.16667 3.16667L6.33334 6.33333V4.03829ZM0.435421 10.0732C0.573171 10.3993 0.745755 10.716 0.946838 11.0153C1.14396 11.3082 1.37196 11.5837 1.62292 11.8338C2.12815 12.3392 2.72591 12.7426 3.38359 13.0221C3.72005 13.1646 4.07075 13.2731 4.42463 13.3451C4.55684 13.372 4.69221 13.3895 4.8268 13.4069V15.7375L7.99346 12.5709L4.8268 9.40421V11.803C4.79909 11.7982 4.7698 11.8006 4.74209 11.7943C3.98411 11.6389 3.28862 11.2639 2.74234 10.716C2.37427 10.3487 2.08227 9.9124 1.88306 9.43209C1.68385 8.95178 1.58135 8.43688 1.58142 7.9169C1.58149 7.39691 1.68414 6.88205 1.88349 6.40179C2.08283 5.92154 2.37495 5.48532 2.74313 5.11813L1.62371 3.99792C1.11823 4.50289 0.715014 5.10072 0.436213 5.75858C0.147395 6.44136 -0.000957288 7.17532 4.64815e-06 7.91667C-0.000500135 8.65738 0.147559 9.39068 0.435421 10.0732Z" fill="#E0B36A"/>
                    </svg>
                </SyncBtn>
            </SyncDiv>
            
        </Container>
    )
}

export default Header