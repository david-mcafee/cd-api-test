/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $input: CreateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    createRegistration(input: $input, condition: $condition) {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $input: UpdateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    updateRegistration(input: $input, condition: $condition) {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $input: DeleteRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    deleteRegistration(input: $input, condition: $condition) {
      id
      name
      major
      createdAt
      updatedAt
    }
  }
`;
export const createRegistrationConnection = /* GraphQL */ `
  mutation CreateRegistrationConnection(
    $input: CreateRegistrationConnectionInput!
    $condition: ModelRegistrationConnectionConditionInput
  ) {
    createRegistrationConnection(input: $input, condition: $condition) {
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
export const updateRegistrationConnection = /* GraphQL */ `
  mutation UpdateRegistrationConnection(
    $input: UpdateRegistrationConnectionInput!
    $condition: ModelRegistrationConnectionConditionInput
  ) {
    updateRegistrationConnection(input: $input, condition: $condition) {
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
export const deleteRegistrationConnection = /* GraphQL */ `
  mutation DeleteRegistrationConnection(
    $input: DeleteRegistrationConnectionInput!
    $condition: ModelRegistrationConnectionConditionInput
  ) {
    deleteRegistrationConnection(input: $input, condition: $condition) {
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
