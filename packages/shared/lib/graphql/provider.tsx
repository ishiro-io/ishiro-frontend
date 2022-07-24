import { cacheExchange } from "@urql/exchange-graphcache";
import { Provider, createClient, dedupExchange, fetchExchange } from "urql";

import {
  GraphCacheConfig,
  MeDocument,
  User,
  UserFieldsFragment
} from "./generated";

export const GraphQLProvider = ({ url, children }: Props) => {
  const client = createClient({
    url,
    exchanges: [
      dedupExchange,
      cacheExchange<GraphCacheConfig>({
        updates: {
          Mutation: {
            phoneConnect(parent, args, cache, info) {
              const me = parent["phoneConnect"]!["user"];
              if (!me) return;

              cache.updateQuery({ query: MeDocument }, (data) => {
                return {
                  __typename: "Query",
                  me: { __typename: "User", ...me }
                };
              });
            },
            phoneRegister(parent, args, cache, info) {
              const me = parent["phoneRegister"];
              if (!me) return;

              cache.updateQuery({ query: MeDocument }, (data) => {
                return {
                  __typename: "Query",
                  me: { ...me }
                };
              });
            },
            logout(parent, args, cache, info) {
              cache.updateQuery({ query: MeDocument }, (data) => ({
                __typename: "Query",
                me: null
              }));
            }
          }
        }
      }),
      fetchExchange
    ]
  });

  return <Provider value={client}>{children}</Provider>;
};

type Props = {
  url: string;
  children?: React.ReactNode;
};
