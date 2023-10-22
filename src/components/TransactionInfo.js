import styled, { css } from 'styled-components';

const Container = styled.div `
    display: flex;
    background: #161C23;
    border-radius: 2px;
    margin-bottom: 5px;
`
const ListItem = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.first && css`
        justify-content: flex-start;
    `};
    ${props => props.indic && css`
        align-items: center;
    `};
`

const WalletText = styled.h4 `
    margin-left: 5px;
    font-weight: 600;
    font-size: 12px;
    color: #ADABAA;

    ${props => props.secondary && css`
        font-weight: 300;
        font-size: 10px;
        color: #ADABAA;
        margin-top: -9px;
    `};
`

const BitLogo = styled.div `
    margin-left: 30px;
    transform: rotate(-12.2deg);
`

const IndicatorText = styled.h4 `
    font-weight: 700;
    font-size: 13px;
    color: #8484F1;
    ${props => props.indic && css`
        margin-left: 3px;
    `};

`

const DateWrap = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TransactionInfo = (props) => {
    const date = new Date(props.timestamp);
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const formattedTime = date.toLocaleString("en-US", {
        hour: 'numeric', minute: 'numeric', second: '2-digit', hour12: true
    });
    return (
        <Container>
            <ListItem first>
                <BitLogo>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.0565" cy="18.4917" r="15" transform="rotate(-12.199 18.0565 18.4917)" fill="#403D3A"/>
                        <path d="M23.366 15.713C23.2567 14.0134 21.811 13.3994 19.9695 13.1793L20.0433 10.8285L18.6131 10.7841L18.5407 13.073C18.1647 13.0606 17.7807 13.0564 17.3975 13.0521L17.4708 10.7483L16.0404 10.7032L15.9664 13.0532C15.6565 13.0495 15.3516 13.0464 15.0551 13.0365L15.0552 13.0291L13.0817 12.9665L13.0339 14.4945C13.0339 14.4945 14.0915 14.5076 14.0733 14.5263C14.6528 14.5449 14.8304 14.8872 14.8764 15.1798L14.7927 17.8575C14.8324 17.8588 14.8842 17.8624 14.9437 17.8717L14.7924 17.8674L14.6744 21.6189C14.6428 21.8 14.5265 22.0874 14.1211 22.0755C14.1395 22.0921 13.0815 22.043 13.0815 22.043L12.7435 23.7422L14.6059 23.8008C14.9521 23.8123 15.2928 23.8291 15.6268 23.8415L15.5529 26.2187L16.9823 26.2632L17.0562 23.9123C17.4485 23.932 17.8282 23.9469 18.1991 23.9588L18.1248 26.2998L19.555 26.3441L19.63 23.9717C22.0401 23.9094 23.7424 23.3564 24.0226 21.104C24.2488 19.2908 23.4187 18.4516 22.0635 18.0812C22.9069 17.6851 23.4483 16.9572 23.366 15.713ZM21.2039 20.7334C21.1498 22.5102 18.1134 22.2122 17.1434 22.1826L17.2435 19.0328C18.2138 19.0639 21.2629 18.8807 21.2039 20.7334ZM20.6785 16.2685C20.6276 17.8851 18.0964 17.616 17.2894 17.5907L17.379 14.7349C18.1861 14.7602 20.7316 14.5823 20.6785 16.2685Z" fill="#DB953C"/>
                    </svg>
                </BitLogo>
                <DateWrap>
                    <WalletText>
                        {formattedDate}
                    </WalletText>
                    <WalletText secondary>
                        {formattedTime}
                    </WalletText>
                </DateWrap>
            </ListItem>

            <ListItem>
                <WalletText>
                    {props.wallet}
                </WalletText>
            </ListItem>

            <ListItem>
                <WalletText>
                   {props.amount/100000000} BTC
                </WalletText>
            </ListItem>

            <ListItem indic>
                {props.recieve && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.44547 6.01797L2.43253 3.80713C2.40955 3.45156 2.0736 3.17609 1.69725 3.18855L1.69694 3.18856C1.29803 3.20134 0.998259 3.49118 1.01166 3.85114L1.01174 3.85411L1.11262 8.18453C1.12627 8.52836 1.45779 8.80669 1.83781 8.79411L1.83781 8.79405L1.84349 8.79397L6.80456 8.72679C7.20222 8.71288 7.50072 8.4235 7.48735 8.06429C7.47453 7.71982 7.14263 7.44074 6.7621 7.45333L6.76211 7.45352L6.75164 7.45349L4.12309 7.44587L3.52478 7.44414L3.93455 7.04794L9.42399 1.74034C9.6939 1.47937 9.68316 1.07603 9.39923 0.836954C9.11175 0.594886 8.65512 0.610757 8.38857 0.868482L2.89914 6.17608L2.44894 6.61136L2.44547 6.01797Z" fill="#8484F1" stroke="#161C23" strokeWidth="0.5"/>
                </svg>}
                {!props.recieve && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=" #8484F1" strokeWidth="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M13.4746 5.49487L13.4793 7.49487L8.92169 7.50553L18.5252 17.0897L17.1124 18.5054L7.48253 8.89485L7.49333 13.5089L5.49333 13.5136L5.47461 5.51358L13.4746 5.49487Z" fill=" #8484F1"/> </g>
                </svg>}
                <IndicatorText indic>
                   {props.recieve === true && "RECEIVED"}
                   {props.recieve === false && "SENT"}
                </IndicatorText>
            </ListItem>

            <ListItem>
                <IndicatorText>
                   {props.success === true && "SUCCESS"}
                   {props.success === false && "PENDING"}
                </IndicatorText>
            </ListItem>
            
            
        </Container>
    )
}

export default TransactionInfo;