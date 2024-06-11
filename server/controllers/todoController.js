import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodos = async (req, res) => {
  const { userId } = req.user;
  try {
    const todos = await prisma.todo.findMany({ where: { userId } });
    res.json(todos);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  const { title, category } = req.body;
  const { userId } = req.user;
  try {
    const todo = await prisma.todo.create({
      data: { title, category, userId },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed, category } = req.body;
  const { userId } = req.user;
  try {
    const todo = await prisma.todo.updateMany({
      where: { id: parseInt(id), userId },
      data: { title, completed, category },
    });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  try {
    await prisma.todo.deleteMany({ 
      where: { id: parseInt(id), userId },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
