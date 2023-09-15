import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  authors_v1_Author: {
    namePlusId: root =>
      `${root.name} ${root.id}`
  }
  // Book: {
  //   author: {
  //     selectionSet: /* GraphQL */`
  //     {
  //       authorId
  //     }
  //     `,
  //     resolve: async (root, _args, context, info) => {
  //       return await context.Authors.Query.authors_v1_AuthorsService_GetAuthor({
  //         root,
  //         args: {
  //           input: {
  //             id: root.authorId,
  //           }
  //         },
  //         context,
  //         info,
  //       })
  //     }
  //   }
  // },
}

export default resolvers