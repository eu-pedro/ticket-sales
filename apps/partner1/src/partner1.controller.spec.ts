import { Test, TestingModule } from '@nestjs/testing';
import { Partner1Controller } from './partner1.controller';
import { Partner1Service } from './partner1.service';

describe('Partner1Controller', () => {
  let partner1Controller: Partner1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Partner1Controller],
      providers: [Partner1Service],
    }).compile();

    partner1Controller = app.get<Partner1Controller>(Partner1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(partner1Controller.getHello()).toBe('Hello World!');
    });
  });
});
