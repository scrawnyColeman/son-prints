import { gql } from "graphql-request";

export const query = gql`
  query getBySlug($slug: String) {
    print(where: { slug: $slug }) {
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
