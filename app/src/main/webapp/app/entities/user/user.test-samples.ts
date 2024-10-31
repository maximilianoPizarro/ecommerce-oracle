import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20814,
  login: 'Bvt',
};

export const sampleWithPartialData: IUser = {
  id: 16227,
  login: 'o',
};

export const sampleWithFullData: IUser = {
  id: 15857,
  login: 'O',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
