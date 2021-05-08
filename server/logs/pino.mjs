import pino from "pino";
import childProcess from "child_process";
import stream from "stream";

const cwd = process.cwd();
const { env } = process;
const logPath = `${cwd}/logs/output_log`;

const logThrough = new stream.PassThrough();
const logger = pino({ name: "server" }, logThrough);

const child = childProcess.spawn(
  process.execPath,
  [
    await import.meta.resolve("pino-tee"),
    "warn",
    `${logPath}/warn.log`,
    "error",
    `${logPath}/error.log`,
    "info",
    `${logPath}/info.log`,
  ],
  { cwd, env }
);

logThrough.pipe(child.stdin);

export default logger;
