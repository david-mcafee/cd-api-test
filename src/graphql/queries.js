/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      registrations {
        id
        items {
          id
          name
          major
          createdAt
          updatedAt
        }
        nextToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        registrations {
          id
          nextToken
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        major
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRegistrationConnection = /* GraphQL */ `
  query GetRegistrationConnection($id: ID!) {
    getRegistrationConnection(id: $id) {
      id
      items {
        id
        name
        major
        createdAt
        updatedAt
      }
      nextToken
      createdAt
      updatedAt
    }
  }
`;
export const listRegistrationConnections = /* GraphQL */ `
  query ListRegistrationConnections(
    $filter: ModelRegistrationConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        items {
          id
          name
          major
          createdAt
          updatedAt
        }
        nextToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
