import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 5005;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

(async () => {
    const server = app.listen(port);
    console.log(`Listening on port ${port}`);

    const cleanUp = () => {
        server.close(() => {
            console.log('Server closed');
            process.exit(0);
        });
    };

    process.on('SIGINT', cleanUp);
    process.on('SIGHUP', cleanUp);
    process.on('SIGUSR2', cleanUp);
    process.on('SIGTERM', cleanUp);
    process.on('uncaughtException', cleanUp);
})();
