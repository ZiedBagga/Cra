import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CraDto } from './dto/cra.dto';
import { CraService } from './cra.service';
import { Cra } from './interfaces/cra.interface';

@Controller('cra')
export class CraController {
    constructor(private readonly craService: CraService) {}

    @Post()
        async create(@Body() craDto: CraDto) {
        return this.craService.create(craDto);
    }

    @Get()
        async findAll(): Promise<Cra[]> {
        return this.craService.findAll();
    }

    //get cra by id
    @Get(':id')
        async find(@Param('id') id: string) {
        return this.craService.find(id);
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() craDto: CraDto) {
        return this.craService.update(id, craDto);
    }

    @Delete(':id')
        async delete(@Param('id') id: string, @Body() craDto: CraDto) {
        return this.craService.delete(id, craDto);
    }
}