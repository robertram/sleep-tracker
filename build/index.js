"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { graphqlHTTP } from "express-graphql";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// const _data: any = {
//   warriors: [
//     { id: "001", name: "Jaime" },
//     { id: "002", name: "Jorah" },
//   ],
// };
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (_request, response) => {
  response.send("Hello, GraphQL!");
});
app.get("/ping", (_request, response) => {
  response.send("Pong!");
});
app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
