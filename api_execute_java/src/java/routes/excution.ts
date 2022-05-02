import {
    javaExcution,
} from "../controllers";


export const excutionRoutes = [
    { path: "/excution/java", method: "post", action: javaExcution },
];
