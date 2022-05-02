import {Request, Response} from "express";
import {exec} from "child_process";
import * as fs from "fs";


/**
 * Assign a excution to one or many tasks
 */
export async function javaExcution(request: Request, response: Response)
{
    const code = request.body.code;
    console.log(code)
    fs.writeFile('main.java', code, function (err) {
        if (err) throw err;
    });
    exec("javac main.java", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }else{
            exec("java main.java", function (err){
                if(err){
                    console.log(`error: ${error.message}`);
                    return;
                }else{
                    console.log(`stdout:\n${stdout}`);
                    response.send({response: stdout});
                    response.status(200).end();
                }
            })
        }

    });

}