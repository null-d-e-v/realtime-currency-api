import { Controller, Get, Param, Res } from "routing-controllers";
import { Response } from "express";

@Controller('/api')
export default class ApiRouter {
  @Get('/convert/:from/:to')
  converter(@Param('from') from: string, @Param('to') to: string, @Res() res: Response) {
    console.log(from)
    console.log(to)
    return res.status(200).json({ message: 'hola' })
  }
}
