import React from "react";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
      </Routes>
    </>
  );
};

export default Home;
