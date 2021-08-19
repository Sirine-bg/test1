const resolvers = {
  Query: {
    getTodoList: async (parent, args, context) =>
      await context.models.Todo.queries.getAll(),
    
  },
  Mutation: {
    addTodo: async (parent, args, context) =>
      await context.models.Todo.mutations.addTodo(
        JSON.parse(JSON.stringify(args.todo))
      ),
   
    deleteItem: async (parent, args, context) =>
      await context.models.Todo.mutations.deleteItem(
        JSON.parse(JSON.stringify(args.id))
      ),
   
  },
};

export default resolvers;
