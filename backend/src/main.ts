import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exceptionHandler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors({
    origin: true,
  });
  await app.listen(3000, ()=>{
    console.log("Server is listening on 3000.")
  });
}
bootstrap();
