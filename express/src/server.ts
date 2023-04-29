import express, { Application, Request, Response } from "express";
import sql from "sqlite3";

const app: Application = express();
const port = 5005;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.post("/api/v1/new", (req: Request, res: Response) => {
    const db = new sql.Database("db.sqlite3");
    const { name, email, password } = req.body;
    const query = `INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})`;
    db.run(query, (err) => {
        if (err) {

        }
    });
});

// curl comment for calling the API
// curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email": "john.doe@example","password":"password"}' http://localhost:5005/api/v1/new
// TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.

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
