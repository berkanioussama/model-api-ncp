import { Role } from '@prisma/client';

export class UserEntity {
  id: string;
  clerkId: string;
  email: string;
  name?: string;
  imageUrl?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
