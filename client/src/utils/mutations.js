import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation AddProduct($name: String!, $description: String!, $image: String!, $price: Int!, $category: String!) {
  addProduct(name: $name, description: $description, image: $image, price: $price, category: $category) {
    _id
  }
}
`;

export const ADD_GENRE = gql`
 mutation addGenre(
    $name: String!
  ) {
    addGenre(
      name: $name
    ) {
      _id
    }
  }
`;