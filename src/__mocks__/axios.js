module.exports = {
  get: jest.fn((url) => {
    if (url === "http://localhost:5000/api/public") {
      return Promise.resolve({
        data: {
          message:
            "Hello from a public endpoint! You don't need to be authenticated to see this.",
        },
      });
    } else if (url === "http://localhost:5000/api/private") {
      return Promise.resolve({
        data: {
          message:
            "Hello from a private endpoint! You need to be authenticated to see this.",
        },
      });
    }
  }),
};
