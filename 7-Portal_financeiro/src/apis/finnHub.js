import axios from 'axios'

const TOKEN = 'cg2edo9r01qq9k4992agcg2edo9r01qq9k4992b0'

export default axios.create({
  baseURL:'https://finnhub.io/api/v1',
  params:{
    token:TOKEN
  }
})