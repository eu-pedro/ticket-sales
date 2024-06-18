import { Module } from '@nestjs/common';
import { SpotsCoreModule } from '@app/core/spots/spots-core.module';

@Module({
  providers: [SpotsCoreModule],
})
export class SpotsModule {}
