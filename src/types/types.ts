interface Todo {
  name: string;
  id: number;
  isCompleted: boolean;
}

interface Filters {
  all: boolean;
  completed: boolean;
  active: boolean;
}

export { Todo, Filters };
