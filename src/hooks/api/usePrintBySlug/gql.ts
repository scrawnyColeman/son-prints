import { gql } from "graphql-request";

export const query = gql`
  query getBySlug($slug: String) {
    print(where: { slug: $slug }) {
      slug
      title
      description {
        html
      }
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
