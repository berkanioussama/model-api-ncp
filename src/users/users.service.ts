import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createOrUpdate(createUserDto: CreateUserDto) {
    const { clerkId, email, name, imageUrl, role } = createUserDto;

    return this.prisma.user.upsert({
      where: { clerkId }, // Check if user already exists via Clerk ID
      update: { email, name, imageUrl, role }, // Update existing user data
      create: { clerkId, email, name, imageUrl, role }, // Create new user
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
