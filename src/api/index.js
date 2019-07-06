const ENDPOINT_VERIFY_TICKET    = 'verifyTicket'
const ENDPOINT_SEARCH           = 'search'

export default class APIService {

    constructor(){
        this.baseUrl = "http://68.183.204.206:3000"
    }

    search(param){
        return this.fetchData(ENDPOINT_SEARCH, param)
    }

    verifyTicket(param){
        return this.postData(ENDPOINT_VERIFY_TICKET, param)
    }

    postData(endpoint, param){
        return fetch(`${this.baseUrl}/${endpoint}`, {
            method : "post",
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(param)
        })
    }

    fetchData(endpoint, urlParam){
        return fetch(`${this.baseUrl}/${endpoint}${urlParam}`)
    }
}