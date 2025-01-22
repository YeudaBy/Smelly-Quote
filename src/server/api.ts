import { remultNextApp } from "remult/remult-next";
import { createPostgresDataProvider } from "remult/postgres";
import {Sentence} from "@/shared/Sentence";

export const api = remultNextApp({
  dataProvider: createPostgresDataProvider({
    connectionString: process.env["DATABASE_URL"]
  }),
  admin: true,
  entities: [Sentence],
});
