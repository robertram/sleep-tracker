import express from "express";
import cors from "cors";
// import { graphqlHTTP } from "express-graphql";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// const _data: any = {
//   warriors: [
//     { id: "001", name: "Jaime" },
//     { id: "002", name: "Jorah" },
//   ],
// };

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.send("Hello, GraphQL!");
});

app.get("/ping", (_request, response) => {
  response.send("Pong!2");
});

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
