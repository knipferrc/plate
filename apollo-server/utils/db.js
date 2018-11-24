import Lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import mkdirp from 'mkdirp'
import { resolve } from 'path'

mkdirp(resolve(__dirname, '../../db'))

export const db = new Lowdb(
  new FileSync(resolve(__dirname, '../../db/db.json'))
)

// Seed an empty DB
db.defaults({
  todoLists: [
    {
      id: 1,
      title: 'Grocery List',
      description: 'Grocery list for this weekend',
      totalTodos: 1,
      todos: [
        {
          id: 1,
          name: 'Milk',
          description: 'Go get milk from Kroger'
        }
      ]
    },
    {
      id: 2,
      title: 'Camping list',
      description: 'List of stuff to bring camping',
      totalTodos: 2,
      todos: [
        {
          id: 1,
          name: 'Plates',
          description: 'Get some plates so we have something to eat off'
        },
        {
          id: 2,
          name: 'Utencils',
          description: 'Get some utencils so we can eat'
        }
      ]
    },
    {
      id: 3,
      title: 'Extra list',
      description: 'List of stuff to bring camping',
      totalTodos: 2,
      todos: [
        {
          id: 1,
          name: 'Plates',
          description: 'Get some plates so we have something to eat off'
        },
        {
          id: 2,
          name: 'Utencils',
          description: 'Get some utencils so we can eat'
        }
      ]
    },
    {
      id: 4,
      title: 'Wish List',
      description: 'List of stuff to bring camping',
      totalTodos: 2,
      todos: [
        {
          id: 1,
          name: 'Plates',
          description: 'Get some plates so we have something to eat off'
        },
        {
          id: 2,
          name: 'Utencils',
          description: 'Get some utencils so we can eat'
        }
      ]
    },
    {
      id: 5,
      title: 'Chores',
      description: 'List of stuff to bring camping',
      totalTodos: 2,
      todos: [
        {
          id: 1,
          name: 'Plates',
          description: 'Get some plates so we have something to eat off'
        },
        {
          id: 2,
          name: 'Utencils',
          description: 'Get some utencils so we can eat'
        }
      ]
    },
    {
      id: 6,
      title: 'Woodworking',
      description: 'List of stuff to bring camping',
      totalTodos: 2,
      todos: [
        {
          id: 1,
          name: 'Plates',
          description: 'Get some plates so we have something to eat off'
        },
        {
          id: 2,
          name: 'Utencils',
          description: 'Get some utencils so we can eat'
        }
      ]
    }
  ],
  users: []
}).write()