export const SignUpUser = `
mutation SignUpUser($email: String!, $password: String!) {
  signupUser(email: $email, password: $password) {
    id
    token
  }
}
`;

export const AuthenticateUser = `
mutation AuthenticateUser($email: String!, $password: String!) {
  authenticateUser(email: $email password:  $password) {
    token
  }
}
`;

export const CreateProfile = `
mutation CreateProfile(
  $userId: ID!
  $displayName: String!
  $firstName: String
  $lastName: String
  $gender: Gender
  $address1: String
  $address2: String
  $postCode: String
  $city: String
  $country: String
  $phoneNumber: String
  $pictureUrl: String
) {
  createProfile(
    userId: $userId
    displayName: $displayName
    firstName: $firstName
    lastName: $lastName
    gender: $gender
    address1: $address1
    address2: $address2
    postCode: $postCode
    city: $city
    country: $country
    phoneNumber: $phoneNumber
    pictureUrl: $pictureUrl
  ) {
    id
  }
}
`;

export const GetProfile = `
query GetProfile($userId: ID!) {
  User(id: $userId) {
    profile {
      displayName
      firstName
      lastName
      gender
      address1
      address2
      postCode
      city
      country
      phoneNumber
      pictureUrl
      updatedAt
    }
  }
}
`;

export const UpdateProfile = `
  mutation UpdateProfile(
    $profileId: ID!
    $displayName: String
    $firstName: String
    $lastName: String
    $gender: Gender
    $address1: String
    $address2: String
    $postCode: String
    $city: String
    $country: String
    $phoneNumber: String
    $pictureUrl: String
  ) # $userId: ID!
  {
    updateProfile(
      id: $profileId
      displayName: $displayName
      firstName: $firstName
      lastName: $lastName
      gender: $gender
      address1: $address1
      address2: $address2
      postCode: $postCode
      city: $city
      country: $country
      phoneNumber: $phoneNumber
      pictureUrl: $pictureUrl
    ) # userId: $userId
    {
      id
    }
  }
`;

export const DeleteProfile = `
mutation DeleteProfile($profileId: ID!) {
  deleteProfile(id: $profileId) {
    id
  }
}
`;
