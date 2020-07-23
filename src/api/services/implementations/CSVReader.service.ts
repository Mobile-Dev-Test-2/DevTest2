import { Injectable } from '@nestjs/common';

@Injectable()
export class CSVReaderService {
  readFile<T>(path: string, onComplete: (data: any[]) => T[]): T[] {
    throw new Error('Method not implemented.');
  }
}
