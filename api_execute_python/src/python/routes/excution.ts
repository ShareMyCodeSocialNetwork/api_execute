import {
    pythonExcution,
} from "../controllers";


export const excutionRoutes = [
    { path: "/excution/python", method: "post", action: pythonExcution },
];
