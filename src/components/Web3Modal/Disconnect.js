import React  from "react";
import { StyledLink, ConnectButton } from "./Web3ModalStyles";

const providers = [

    {
        to: "/trade/wallet",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/trade",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/history",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/tokeninfo",
        icon: "fas fa-coins",
        label: "Token Info"
    },
]

const Disconnect = ({connect, to, close}) => {

    function disconnect() {
        localStorage.setItem("state", 1)
        close()
        connect()

    }
    return (
        <ConnectButton onClick={() => disconnect()} >
            <StyledLink to={to}>
                <i className="fas fa-sign-out"></i>
                <span className="label">Disconnect</span>
            </StyledLink>
        </ConnectButton>
    )
}

export default Disconnect;