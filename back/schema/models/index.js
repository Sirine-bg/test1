import Todo from "../../db/models/TodoModel";
import List from "../../db/models/ListModel";

const generateTodoModel = ({ user }) => ({
  queries: {
    getAll: () =>
       new Promise(
            async (resolve, reject) =>
              await Todo.find({}, (err, todo) =>
                err ? reject(err) : resolve(todo)
              )
          ),
    
  
  },
  mutations: {
    addTodo: (todo) =>
       new Promise((resolve, reject) =>
            new Todo(
              Object.assign({}, { ...todo })
            ).save((err, todo) => (err ? reject(err) : resolve(todo)))
          ),
    deleteItem: (id) =>
      new Promise(async (resolve, reject) =>
        
          await Todo.findByIdAndDelete(id, (err, todo) =>
              err ? reject(err) : resolve(todo)
            )
          
      ),
    addList: (list) =>
      new Promise((resolve, reject) =>
        new List(list).save((err, user) => (err ? reject(err) : resolve(list)))
      ),
  },
});

export default generateTodoModel;
