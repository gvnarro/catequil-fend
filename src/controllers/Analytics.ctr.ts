import { Request, Response } from 'express';

module AnalyticsCtr {
    'use strict';
    export function getShowAssistance(req: Request, res: Response) {
        // var array = [{id:1, nombre:"Carlos"}];
        // var string = JSON.stringify(array);
        var string = [
            {
                "id": "1",
                "name": "dsf",
                opciones: [
                    {
                        "opction1": "1",
                        "contenido": "ffs"
                    },
                    {
                        "opction1": "1",
                        "contenido": "ffs"
                    },
                    {
                        "opction1": "1",
                        "contenido": "ffs"
                    }

                ]
            }
        ];
        return res.end( JSON.stringify(string));
    }

}
export = AnalyticsCtr;