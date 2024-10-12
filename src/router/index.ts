import { Controller, Get, Res } from "routing-controllers";
import { Response } from "express";

@Controller('/')
export default class IndexRouter {

  @Get('/')
  index(@Res() res: Response) {
    return res.status(200).json({ title: 'Realtime Currency API', version: '1.0.0' })
  }
}
