export const CreatePortfolio = `
mutation CreatePortfolio (
  $userId: ID!
  $name: String!,
  $pictureUrl: String,
  $status: PortfolioStatus! #DRAFT, PUBLISH
) 
  createPortfolio(
    userId: $userId,
    name: $name, 
    pictureUrl: $pictureUrl,
    status: $status
  ) {
    id
  }
}
`;

export const UpdatePortfolio = `
mutation UpdatePortfolio($portfolioId: ID!, $name: String, $pictureUrl: String) {
  updatePortfolio(id: $portfolioId, name: $name, pictureUrl: $pictureUrl) {
    id
  }
}
`;

// Cascade delete under experiment, use at your own risk.
export const DeletePortfolio = `
mutation DeletePortfolio($portfolioId: ID!) {
  updatePortfolio(id: $portfolioId, toDelete: true) {
    id
  }
}
`;

export const ListPortfolios = `
query ListPortfolios($first: Int, $skip: Int) {
  allPortfolios(
    first: $first, 
    skip: $skip, 
    filter: { status: PUBLISH }
  ) {
    id
    name
    pictureUrl
  }
}
`;

export const ListSelfPortfolios = `
query ListSelfPortfolios($userId: ID!, $first: Int, $skip: Int) {
  allPortfolios(first: $first, skip: $skip, filter: {user: {id: $userId}}) {
    id
    name
    pictureUrl
    status
    # _holdingsMeta {
    #   count
    # }
    # _followersMeta {
    #   count
    # }
    # holdings {
    #   id
    #   name
    #   asset {
    #     ticker
    #   }
    # }
  }
}
`;

export const PortfolioDetail = `
query PortfolioDetail($portfolioId: ID!) {
  Portfolio(id: $portfolioId) {
    id
    name
    pictureUrl
    status
    _holdingsMeta {
      count
    }
    _followersMeta {
      count
    }
    holdings {
      id
      name
      amount
      asset {
        ticker
      }
    }
    followers {
      id
      profile {
        displayName
        pictureUrl
      }
    }
  }
}
`;

export const GetPortfolioHistoDay = `
query GetPortfolioHistoDay($portId: ID!, $limit: Int, $toISODate: String, $fromISODate: String) {
  getPortfolioHistoDay(id: $portId, limit: $limit, toISODate: $toISODate, fromISODate: $fromISODate) {
    value
    timestamp
  }
}
` 
export const GetPortfolioLog = `
query GetPortfolioLog($portId: ID!, $first: Int, $skip: Int) {
  allHoldingLogs(first: $first, skip: $skip, filter: {holding: {portfolio: {id: $portId}}}) {
    id
    amount
    createdAt
    holding {
      name
      asset {
        name
      }
    }
  }
}
`