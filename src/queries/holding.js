export const ListAssets = `
query ListAssets {
  allAssets {
    id
    ticker
    type
    name
    decimal
    pictureUrl
  }
}
`;
export const CreateHolding = `
mutation CreateHolding($assetId: ID!, $portfolioId: ID!, $name: String) {
  createHolding(assetId: $assetId, portfolioId: $portfolioId, name: $name) {
    id
  }
}
`;

export const UpdateHolding = `
mutation UpdateHolding($holdingId: ID!, $name: String) {
  updateHolding(id: $holdingId, name: $name) {
    id
  }
}
`;

export const DeleteHolding = `
mutation DeleteHolding($holdingId: ID!) {
  updateHolding(id: $holdingId, toDelete: true) {
    id
  }
}
`;

export const ListHolding = `
query ListHolding($portfolioId: ID!) {
  allHoldings(filter: {portfolio: {id: $portfolioId}}) {
    id
    name
    asset {
      id
      ticker
      decimal
      pictureUrl
    }
    amount
    # Holding owner only.
    # transactions {
    #   id
    #   type
    #   amount
    #   createdAt
    # }
  }
}
`;
