import { useSelector } from "react-redux"
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Header from './components/Header';
import SideBar from './components/SideBar';
import WalletsList from './components/WalletsList';
import TransactionsList from './components/TransactionsList';
import { syncIndicatorAction, syncJobAction, walletAction, transactionAction } from './redux/index';

export const BALANCE = "balance";
export const TRANSACTION = "transaction";


const Container = styled.div `
  background-color:#000;
  height: 100vh;
`
const ContentDiv = styled.div `
    display: flex;
`
const Line = styled.div `
    border: 1px solid #1A1F26;
`

function App() {
  const sideBarIndex = useSelector((state) => state.sideBar);
  const allJobs = useSelector((state) => state.jobs);
  const syncState = useSelector((state) => state.inSync);

  const dispatch = useDispatch();

  const { inSync,outSync } = bindActionCreators(syncIndicatorAction, dispatch);
  const { shiftJob, setWait } = bindActionCreators(syncJobAction, dispatch);
  const {updateBalance} = bindActionCreators(walletAction,dispatch);
  const {addTransaction} = bindActionCreators(transactionAction, dispatch);


  useEffect(() => {
      const execute = async () => {
        if (allJobs.jobs.length > 0) {
          if(syncState)
            outSync();
          if(!allJobs.wait) {
            const job = allJobs.jobs[0];
            const allTask = await job.task()
            if(job.name === BALANCE) {
              let balance = 0;
              await new Promise((resolve, reject) => 
                  allTask.forEach(async (task,ind) => {
                    try {
                      const response = await task();
                      balance+=response.data.final_balance;
                    } catch (err) {
                      console.log(err);
                    }
                    if (ind === allTask.length-1) resolve();
                  })
              )
              updateBalance(job.walletName,balance/100000000);
            } else if(job.name===TRANSACTION) {
              await new Promise((resolve, reject) =>
                allTask.forEach(async (task,ind) => {
                  try { 
                    const response = await task();
                    if(response.data.txs.length > 0)
                      addTransaction(job.walletName,response.data.txs);
                  } catch(err) {
                      console.log(err);
                  }
                  if (ind === allTask.length-1) resolve();
                })
              )
            }
            setWait(true);
            shiftJob();
            setTimeout(() => setWait(false),200);
          }
          if (allJobs.jobs.length === 0) {
            inSync();
          }
        }
        else if(!syncState) {
          inSync();
        }
      };
      execute();
  }, [allJobs]);

  return (
    <Container>
      <Header/>
      <Line/>
      <ContentDiv>
        <SideBar/>
        {sideBarIndex===0 && <WalletsList/>}
        {sideBarIndex===1 && <TransactionsList/>}
      </ContentDiv>
    </Container>
  );
}

export default App;
