import { Model } from "mongoose";
import Comment from "./model.js";

beforeEach( async () => {
  await Comment.deleteMany();
  await Comment.create({
    name: "Dylan",
    comment: "Hello"
  })
});

test("/", async () => {
  const response = await fetch("http://localhost:3000/");

  expect(await response.text()).toBe("Hello World!");
});

test("get /comments", async () => {
  const response = await fetch("http://localhost:3000/comments");

  const commentsFromServer = await response.json();
  
  expect(commentsFromServer.length).toEqual(1);
  expect(commentsFromServer[0].name).toBe("Dylan");
  expect(commentsFromServer[0].comment).toBe("Hello");
});

test("post /comments", async () => {
  const response = await fetch("http://localhost:3000/comments");

  expect(response.status).toEqual(201);
})

// test("/comments/bd150d38-a183-4cfc-9b00-df033b5dd558", async () => {
//     const response = await fetch("http://localhost:3000/comments/bd150d38-a183-4cfc-9b00-df033b5dd558");
  
//     expect(await response.json()).toEqual([
//       {
//           comment: "Yo",
//           name: "Adrian"
//       }
//     ]);
//   });
