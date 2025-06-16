"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routers/routes");
const PORT = 8001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
}));
// app.use(cors({
//     origin: "*",
//     credentials: true
// }));
app.use((0, cookie_parser_1.default)());
// app.use(verifyToken)
app.get("/api", (req, res) => {
    res.status(200).send("Hello from server");
});
const listRouter = new routes_1.ListRouter();
app.use("/api", listRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
});
