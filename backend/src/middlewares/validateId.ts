import { Request, Response, NextFunction } from "express";

export const validateId = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id) || id <= 0) {
    res.status(400).json({
      message: `El ID '${req.params.id}' no es válido. Debe ser un número entero positivo.`,
    });
    return;
  }

  next();
};
