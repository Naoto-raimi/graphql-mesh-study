import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  authors_v1_Author: {
    namePlusId: {
      // 指定したフィールドをresolveするのに必要なrootのプロパティを指定
      // ここで指定しないとname,idがqueryのfieldに含まれていないとundefinedになる
      selectionSet: "{ name, id }", 
      resolve: (root, _args, _context, _info) => {
        return `${root.name} ${root.id}`
      }
    }
  }
}

export default resolvers