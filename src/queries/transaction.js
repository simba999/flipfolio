// Note: No update and delete operation for Transaction Type in current version

export const CreateTransaction = `
mutation CreateTransaction($holdingId: ID!, $type: TransactionType!, $amount: String!) {
  createTransaction(holdingId: $holdingId, type: $type, amount: $amount) {
    id
  }
}
`;

export const ListTransactions = `
query ListTransactions($holdingId: ID!, $first: Int, $skip: Int) {
  allTransactions(skip: $skip, first: $first, filter: {holding: {id: $holdingId}}) {
    id
    createdAt
    amount
    type
    holding {
      asset {
        ticker
        pictureUrl
        decimal
        id
      }
    }
  }
}
`;

export const ListUserTransactions = `
query ListUserTransactions($userId: ID!, $first: Int, $skip: Int) {
  allTransactions(first: $first, skip: $skip, filter: {
    holding: {
      portfolio: {
        user: {
          id: $userId
        }
      }
    }
  }) 
  {
    id
    createdAt
    amount
    type
    holding {
      asset {
        ticker
        pictureUrl
        decimal
        id
      }
    }
  }
}
`;
