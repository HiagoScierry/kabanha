import type { orTypeOcupation } from '@/constants/ocupation';

export interface IDeveloper {
  id?: number;
  name: string;
  ocupation: orTypeOcupation;
}
