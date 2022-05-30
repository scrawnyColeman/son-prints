import { GraphQLClient } from "graphql-request";

export const API_KEY = process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY;
const graphcms = new GraphQLClient(API_KEY ?? "");

export const fetch = async <GQLResult, GQLVariables = {}>(
  query: string,
  variables?: GQLVariables
) => await graphcms.request<GQLResult>(query, variables);

export const mutate = async <GQLResult, GQLVariables = {}>(
  mutation: string,
  variables?: GQLVariables
) => await graphcms.request<GQLResult>(mutation, variables);
