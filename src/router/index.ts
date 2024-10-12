import { Controller, Get, Res } from "routing-controllers";
import { Response } from "express";

@Controller('/')
export class IndexRouter {

  @Get('/')
  index(@Res() res: Response) {
    res.status(200).json({ 'message': 'Endpoint created successfully' })
  }
}
