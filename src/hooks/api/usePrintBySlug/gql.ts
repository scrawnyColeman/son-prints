import { gql } from "graphql-request";

export const query = gql`
  query getBySlug($slug: String) {
    print(where: { slug: $slug }) {
      description {
        html
      }
      id
      isActive
      tags
      title
      triloPrice
      triloShortCode
      updatedAt
    }
  }
`;
