import { CombinedError } from "urql";

export const formatGraphQLError = (error: CombinedError) => {
  return error.message.replaceAll("[GraphQL]", "").trim();
};
