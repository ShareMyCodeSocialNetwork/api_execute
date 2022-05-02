import {Request, Response} from "express";
import {exec} from "child_process";
import * as fs from "fs";


/**
 * Assign a excution to one or many tasks
 */
export async function pythonExcution(request: Request, response: Response)
{
    const code = request.body.code;
    console.log(code)
    fs.writeFile('js-excution.js', code, function (err) {
        if (err) throw err;
    });
    exec("python3 js-excution.js", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log(`stdout:\n${stdout}`);
        response.send({response: stdout});
        response.status(200).end();
    });

}