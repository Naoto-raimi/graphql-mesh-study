import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  authors_v1_Author: {
    namePlusId: root =>
      // root should contain full response from REST service, instead it
      // only contains `email` since is the only non-virtual field requested in the query
      `${root.name} ${root.id}`
  }
}

export default resolvers