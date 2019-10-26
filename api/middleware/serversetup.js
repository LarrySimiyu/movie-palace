const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
// rouuters

const userRouter = require("../routes/user-router");
const filmInfoRouter = require("../routes/filmInfo-router");
const hitListRouter = require("../routes/hitList-router");
const pdfRouter = require("../routes/pdf-router");
//const screenplayImgRouter = require("../routes/screenplayImage-router");

// exports
module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(morgan("dev"));
  server.use("/api/user", userRouter);
  server.use("/api/hitList", hitListRouter);
  server.use("/api/filmInfo", filmInfoRouter);
  server.use("/api/pdf", pdfRouter);
};
