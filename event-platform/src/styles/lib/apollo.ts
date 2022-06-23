import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qeijxo3s9001z4adfm94od/master',
  cache: new InMemoryCache()
})