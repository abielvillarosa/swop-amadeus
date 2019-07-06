import { ethers } from 'ethers'
import PublicEntryABI from './abi/PublicEntry.json'


export default class BlockchainClient {

    constructor(){
        window.ethereum.enable()
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        this.signer = this.provider.getSigner()
        this.entryContract = new ethers.Contract("0x2A8F1Ea7d561A8992b11666252DC4c13a1ab9683", PublicEntryABI, this.signer)
    }

    async postTicket(swopRefNo, amount){
        let txHash = await this.entryContract.postTicket(swopRefNo, amount)
        console.log(txHash.hash)
        return txHash.hash
    }

    async buyTicket(swopRefNo, amount){
        let wei = 0.00000001
        let txHash = await this.entryContract.buyTicket(swopRefNo, {value : wei})
        console.log(txHash.hash)
        return txHash.hash
    }
}