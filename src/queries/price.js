const getLastestAssetPrices = `
query {
  allAssets {
    ticker
    price: basePrices(
      orderBy: createdAt_DESC, 
      first: 1, 
      filter: {
        counter: {
          ticker: "USD"
        }
    	}) {
      value
      createdAt
      counter {
        decimal
        ticker
      }
    }
  }
}
`;
