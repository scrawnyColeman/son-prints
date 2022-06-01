import { gql } from "graphql-request";

export const query = gql`
  query getPrints {
    prints {
      slug
      title
      description {
        html
      }
      isActive
      coverPhoto {
        url
        width
        height
      }
      sellableEntities {
        isAvailable
        triloPrice
        triloShortCode
        title
      }
      updatedAt
      id
      tags
    }
  }
`;
