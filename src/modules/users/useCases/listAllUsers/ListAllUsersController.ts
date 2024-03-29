import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers["user_id"] as string;
    let allUsers;
    try {
      allUsers = this.listAllUsersUseCase.execute({ user_id });
    } catch (err) {
      return response.status(400).json({ error: err });
    }
    return response.status(200).json(allUsers);
  }
}

export { ListAllUsersController };
