import React from "react";
import styled, { css, keyframes } from "styled-components";
import Circle from "../assets/blue-loader.svg"
import { TitleContainer } from "../Web3Modal/Web3ModalStyles";
// import { walletconnect } from "web3modal/dist/providers/connectors";
import {X, ChevronDown, ArrowDown, ArrowUpCircle, AlertTriangle} from "react-feather"
import metaMask from "../assets/metamask.png"
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";

export const FormWrapper = styled.div`


    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    // height: 30px;
    opacity: 0;
    background-color: rgb(27,32,52);
    padding: 35px 20px;
    border: 1.5px solid rgb(41, 50, 67);
    border-radius: 20px;
    pointer-events: none;
    transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    ${(props) => props.visible && css`
        z-index: 10000;
        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    `}

`
// <ArrowUpCircle strokeWidth={0.5} size={inline ? '40px' : '90px'} color={theme.primary1} />
export const CloseIcon = styled(X)`

    position: absolute;
    left: 90%;
    top: 5%;
    cursor: pointer;
    color: White;
`



export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background: rgba(2,8,26, 0.3);
// background: -webkit-linear-gradient(top, #23233999, #040717);
// background: -moz-linear-gradient(top, #23233999, #040717);
// background: linear-gradient(to bottom, rgba(112,128,136, 0.1), rgba(2,8,26, 0.75));
transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    z-index: 10000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    `}

   
`;

export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    padding-bottom: ${(props) => props.padding};
    display: flex;
    align-items: center;
    justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.img`

animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`
export const CustomLightSpinner = styled(Spinner)`
  
 
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const TitleWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    // padding: 10px;
    // width: 100%;
    // margin: 0 auto;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`   
export const Title = styled.h1`

  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  color: ${(props) => props.color};
` 

export const AddTokenWrapper = styled.div`

    font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    

`   
export const AddTokenTitle = styled.div`

  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  height: 100%;
//   width: 280px;
  line-height: 35px;
  color: ${(props) => props.color};
  background: rgb(23,42,66);
    // border: 1px solid rgb(99,163,253);
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    // padding: 5px;
    font-weight: bold;
    color: rgb(79,143,233);
` 

export const SubTitle = styled.div`

  padding-top: 10px;
  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  color: ${(props) => props.color};
` 



export const Button = styled.div`

  height: 60px;
  width: 100%;
  background: rgb(33,114,229);
  border-radius: 15px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  color: White;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
   margin-top: 60px;
    // padding: 10px;
    // width: 100%;
    // margin: 0 auto;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 

export const ErrorText = styled.div`

  position: absolute;
  left: 5%;
  top: 5%;
  color: White;
  font-size: 22px;
`

export const TokenAmountWrapper = styled.div`

    width: 100%;
    height: ${(props) => props.height};
    background: rgb(14,22,39);
    border-radius: 15px;
    border: 1px solid rgb(41, 50, 67);
    margin-top: ${(props) => props.marginTop};
    // margin-bottom: 10px;

`
export const ArrowDownContainer = styled.div`

    position: absolute;
    top: 23.5%;
    left: 46%;
    // color: White;
    background: White;
    background-color:rgb(14,22,39);
    border: 5px solid  rgb(27,32,52);
    border-radius: 10px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RejectionModal = ({visible, close, amount}) => {
    
    // const { connectOn, disconnect, active, loading } = useAuth()
  
    const provider = localStorage.getItem("provider")

   
    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <ErrorText>Error</ErrorText>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"25px"}>
                    <AlertTriangle strokeWidth={1.5} size={'100px'} color={"red"} />
                </ImgWrapper>
                <TitleWrapper margin={"0"}>
                    <SubTitle style={{"font-weight": "bold"}} color={"red"} size={"16px"} margin={"0"}>Transaction Failed</SubTitle>
                </TitleWrapper>
                <TitleWrapper margin={"5px"}>
                    <SubTitle color={"White"} size={"20px"} margin={"0"}>Close this modal to try again</SubTitle>
                </TitleWrapper>
                <ButtonWrapper margin={"20px"}>
                    <Button onClick={close}>Dismiss</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

export const PendingModal = ({visible, close, amount}) => {

    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"50px"}>
                    <CustomLightSpinner src={Circle} size={"90px"}></CustomLightSpinner>
                </ImgWrapper>
                <TitleWrapper margin={"5px"}>
                    <Title color={"White"} size={"25px"}>Waiting For Confirmation</Title>
                </TitleWrapper>
                <TitleWrapper margin={"5px"}>
                    <SubTitle color={"White"} size={"20px"} margin={"0"}>Approving this contract for {amount} RenBTC</SubTitle>
                </TitleWrapper>
                <TitleWrapper>
                    <SubTitle color={"#adadad"} size={"17px"} margin={"0"}>Confirm this transaction in your wallet</SubTitle>
                </TitleWrapper>
            </FormWrapper>
        </>
    )
}

export const TransactionSubmittedModal = ({visible, close, amount}) => {
    
    // const { connectOn, disconnect, active, loading } = useAuth()
  
    const provider = localStorage.getItem("provider")

   
    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"25px"}>
                    <ArrowUpCircle strokeWidth={0.5} size={'100px'} color={"rgb(33,114,229)"} />
                </ImgWrapper>
                <TitleWrapper margin={"5px"}>
                    <Title color={"White"} size={"23px"}>Transaction Submitted</Title>
                </TitleWrapper>
                <TitleWrapper margin={"5px"}>
                    <SubTitle style={{"font-weight": "bold"}} color={"rgb(33,114,229)"} size={"16px"} margin={"0"}>view on explorer</SubTitle>
                </TitleWrapper>
                <AddTokenWrapper>
                    <AddTokenTitle size={"18px"}>Add RenBTC To Metamask <img src={metaMask} width={"35px"}></img></AddTokenTitle>
                </AddTokenWrapper>
                <ButtonWrapper margin={"20px"}>
                    <Button onClick={close}>Close</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

export const ConfirmationModal = ({visible, close, amount, handleDeposit}) => {

    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={true}>
                <ErrorText>Confirm Transaction</ErrorText>
                <CloseIcon onClick={close}></CloseIcon>
                <ArrowDownContainer>
                    <ArrowDown color={"White"} size={"15px"}/>
                </ArrowDownContainer>
                <TokenAmountWrapper height={"65px"} marginTop={"40px"}>

                </TokenAmountWrapper>
                <TokenAmountWrapper height={"65px"} marginTop={"7px"}>

                </TokenAmountWrapper>
                <TitleWrapper margin={"10px"}>
                    <SubTitle style={{"font-weight": "bold"}} color={"White"} size={"16px"} margin={"0"}>1 RenBTC = $43,647.47</SubTitle>
                </TitleWrapper>
                <TokenAmountWrapper height={"110px"} marginTop={"15px"}>

                </TokenAmountWrapper>
                <TitleWrapper margin={"0px"}>
                    <SubTitle style={{"font-weight": "bold"}} color={"White"} size={"12px"} margin={"0"}>Output is estimated. You will receive at least 16.9807 DAI or the transaction will revert.</SubTitle>
                </TitleWrapper>
                <ButtonWrapper margin={"0px"}>
                    <Button onClick={handleDeposit}>Confirm Transaction</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

const TransactionProcess = (
    {
        confirm, 
        pending, 
        submitted, 
        rejected, 
        visible, 
        close, 
        amount,
        handleDeposit
    }
) => {


    return (

        <>
            {pending && <PendingModal 
                close={close} 
                amount={amount} 
                visible={visible}
            />}
            {confirm && <ConfirmationModal
                close={close} 
                amount={amount} 
                visible={visible}
                handleDeposit={handleDeposit}
            />}
            {submitted && <TransactionSubmittedModal
                close={close} 
                amount={amount} 
                visible={visible}
            />}
            {rejected && <RejectionModal
                close={close} 
                amount={amount} 
                visible={visible}
            />}
        
        </>
    )
}


export default TransactionProcess;