import { Router } from "express";
import { CreateNote } from "../Controllers/NotesController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import noteSchema from "../Schemas/NoteSchema";

const NoteRouter = Router();

NoteRouter.post("/new/note", validateSchema(noteSchema), CreateNote);

export default NoteRouter;
