import { createAction, props } from '@ngrx/store';
import { Font } from 'shared/types';

export const addFonts = (actionType: string) =>
  createAction(actionType, props<{ fonts: Font[] }>());
