import { Router } from 'express';

const userRouter = Router();

userRouter.post('/signin', (request, response) => {
  return response.send('Entrando com o usuário')
});

userRouter.post('/signup', (request, response) => {
  return response.send('Criando um usuário')
});

export default userRouter;