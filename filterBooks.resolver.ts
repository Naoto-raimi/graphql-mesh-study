module.exports = {
    Query: {
      filterBooks: async (root, args, context, info) => {
        const { authorId } = args;

        // REST APIからデータを取得
        const response = await context.Books.Query.AppController_books({
            root,
            args: {},
            context,
            info
          })
        const books = response;
  
        // authorIdが指定されている場合はフィルタリング
        if (authorId) {
          return books.filter(book => book.authorId === authorId);
        }
  
        return books;
      },
    },
  };