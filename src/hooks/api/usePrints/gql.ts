import { gql } from "graphql-request";

export const query = gql`
  query getPrints {
    prints {
      slug
      title
      description {
        html
      }
      triloPrice
      isActive
      coverPhoto {
        url
        width
        height
      }
      triloShortCode
      triloPrice
      updatedAt
      id
      tags
    }
  }
`;
