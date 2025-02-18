beforeEach( () => {
  
});

test("/", async () => {
  const response = await fetch("http://localhost:3000/");

  expect(await response.text()).toBe("Hello World!");
});

test("/comments", async () => {
  const response = await fetch("http://localhost:3000/comments");

  expect(await response.json()).toEqual([
    {
        comment: "Hello",
        name: "Dylan"
    }
  ]);
});

test("/comments/bd150d38-a183-4cfc-9b00-df033b5dd558", async () => {
    const response = await fetch("http://localhost:3000/comments/bd150d38-a183-4cfc-9b00-df033b5dd558");
  
    expect(await response.json()).toEqual([
      {
          comment: "Yo",
          name: "Adrian"
      }
    ]);
  });
