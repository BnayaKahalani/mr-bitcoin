import axios from 'axios'
import { storageService } from './storage.service'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
  getExchangeRates,
  getCurrencyOptions,
}

async function getRate(currency = 'USD') {
  let exchangeRates = await getExchangeRates()
  return exchangeRates[currency]
}

async function getExchangeRates() {
  let exchangeRates = storageService.load('EXCHANGE_RATES')
  if (!exchangeRates) {
    exchangeRates = await axios.get('https://blockchain.info/ticker')
    exchangeRates = exchangeRates.data
    storageService.save('EXCHANGE_RATES', exchangeRates)
  }
  return exchangeRates
}

async function getCurrencyOptions() {
  const exchangeRates = await getExchangeRates()
  const options = []
  for (let currency in exchangeRates) {
    options.push(currency)
  }
  return options
}

async function getMarketPriceHistory() {
  let marketPriceHistory = storageService.load('MARKET_PRICE_DATA')
  if (!marketPriceHistory) {
    marketPriceHistory = await axios.get(
      'https://api.blockchain.info/charts/market-price?cors=true'
    )
    marketPriceHistory = marketPriceHistory.data
    storageService.save('MARKET_PRICE_DATA', marketPriceHistory)
  }
  return marketPriceHistory
}
function getAvgBlockSize() {}
