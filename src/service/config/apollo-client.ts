import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/ckovyil8d2u6801xq3snb4dss/master",
  cache: new InMemoryCache(),
});
