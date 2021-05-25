// import pino from "pino";
// import childProcess from "child_process";
// import stream from "stream";

// const cwd = process.cwd();
// const { env } = process;
// const logPath = `${cwd}/logs/output_log`;
// const logThrough = new stream.PassThrough();
// const logger = pino({ name: "server" }, logThrough);

// const path = await import.meta.resolve("pino-tee");

// const child = childProcess.spawn(
//   process.execPath,
//   [
//     path.slice(7),
//     "warn",
//     `${logPath}/warn.log`,
//     "error",
//     `${logPath}/error.log`,
//     "info",
//     `${logPath}/info.log`,
//   ],
//   { cwd, env }
// );

// logThrough.pipe(child.stdin);

// I am limited by the technologies of my time (node -v 16.1.0), but the day will come and you will complete the project. And by completing it,
// you will change the world. But even now I am sure of one thing, my best creation ... is this logger.
// ...
// If you fix the code above, you can run the logger in multi-threaded mode,
// thereby improving the performance of the application.

const cwd = process.cwd();
import pino from "pino";
const logger = pino(`${cwd}/logs/output.log`);

export default logger;
