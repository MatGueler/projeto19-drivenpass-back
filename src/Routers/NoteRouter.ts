import { Router } from "express";
import {
  CreateNote,
  deleteNoteById,
  fetchNote,
  getAllNotes,
} from "../Controllers/NotesController";
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
NoteRouter.get("/notes", validatingToken, getAllNotes);
NoteRouter.get("/note/:id", validatingToken, fetchNote);
NoteRouter.delete("/note/:id", validatingToken, deleteNoteById);

export default NoteRouter;
