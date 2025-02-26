import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { clerkMiddleware } from '@clerk/express'; // ✅ New import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Validation
  app.useGlobalPipes(new ValidationPipe());

  // Clerk Middleware (adds req.auth to every request)
  app.use(clerkMiddleware());

  await app.listen(3000);
}
bootstrap();
