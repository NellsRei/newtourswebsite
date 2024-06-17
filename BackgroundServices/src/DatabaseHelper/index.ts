import { ConnectionPool, Request} from "mssql";
import { sqlConfig } from "../config";
import mssql from "mssql"

export class DbHelper{
    private pool : Promise<ConnectionPool>

    constructor(){
        this.pool = mssql.connect(sqlConfig)
    }

    async exec(StoredProcedure:string, data:{[x:string] :string | number}){
    //make a request
    const emptyRequest =(await this.pool).request()
    const request = this.createRequest(emptyRequest,data)
    let result  = await request.execute(StoredProcedure)

    return result
    }
    private createRequest(emptyRequest:Request, data:{[x:string] :string | number}){
        const keys = Object.keys(data)
        keys.map(key =>{
            emptyRequest.input(key, data[key])
        })

        return emptyRequest
    }
    async query(queryString:string){
        return await((await this.pool).request().query(queryString))
    }
}