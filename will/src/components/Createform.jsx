import React from "react";

const Createform = () => {
  return (
    <main class="form-signin m-auto">
      <form>
        <h1 class="h3 m-3 fw-normal">Please sign in</h1>

        <div class="form-floating m-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div class="form-floating m-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div class="form-floating m-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div class="form-floating m-4">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
        <div class="form-floating m-4">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary w-20 py-2" type="submit">
            Sign in
          </button>
        </div>
        <p class="mt-5 mb-3 text-body-secondary">© 2024</p>
      </form>
    </main>
  );
};

export default Createform;
