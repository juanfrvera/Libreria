import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BD } from '../data/bdFalsa';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { ...BD };
  }
}
