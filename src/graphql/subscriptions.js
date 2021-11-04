/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration {
    onCreateRegistration {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration {
    onUpdateRegistration {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration {
    onDeleteRegistration {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRegistrationConnection = /* GraphQL */ `
  subscription OnCreateRegistrationConnection {
    onCreateRegistrationConnection {
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
export const onUpdateRegistrationConnection = /* GraphQL */ `
  subscription OnUpdateRegistrationConnection {
    onUpdateRegistrationConnection {
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
export const onDeleteRegistrationConnection = /* GraphQL */ `
  subscription OnDeleteRegistrationConnection {
    onDeleteRegistrationConnection {
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
