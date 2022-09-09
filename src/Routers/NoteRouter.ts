import { Router } from "express";
import { CreateNote, fetchNote } from "../Controllers/NotesController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import { validatingToken } from "../Middlewares/ValidateToken";
import noteSchema from "../Schemas/NoteSchema";

const NoteRouter = Router();

NoteRouter.post(
  "/new/note",
  validatingToken,
  validateSchema(noteSchema),
  CreateNote
);
NoteRouter.get("/:id", fetchNote);

export default NoteRouter;
