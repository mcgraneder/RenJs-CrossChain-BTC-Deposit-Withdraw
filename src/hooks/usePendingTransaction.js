import React, { useState, useEffect } from "react"
import { generate } from "shortid";
const aId = generate()
const unrankedId = generate();


const usePendingTransactions = () => {


    const [deposits, setDeposits] = useState([ {
        id: "Id",
        type: "type",
        from: "from",
        to: "to",
        amount: "amount",
        txHash: "hash",
        time: "date",
      }])
    const [pendingTransactions, setPendingTransactions] = React.useState([
        {
            id: unrankedId,
            from: "address",
            amount: "number",
            time: "Date"
          }
      ]);
      const [currentHash, setCurrentHash] = useState()
    
      React.useEffect(() => {

       

        const pendingDepositData = localStorage.getItem("pending-deposits");
        if (pendingDepositData) {
          setPendingTransactions(JSON.parse(pendingDepositData));
        }

        const currentHashData = localStorage.getItem("currentHash");
        if (currentHashData) {
          setPendingTransactions(currentHashData);
        }

      }, []);
    
      React.useEffect(() => {

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("pending-deposits", JSON.stringify(pendingTransactions));
        localStorage.setItem("currentHash", currentHash);

      });

      return { pendingTransactions, setPendingTransactions, deposits, setDeposits, currentHash, setCurrentHash}
}

export default usePendingTransactions