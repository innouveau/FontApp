import { ActionReducerMap } from '@ngrx/store';
import * as fromFonts from './font.reducer';

export interface EntityState {
  fonts: fromFonts.FontState;
}

export const reducers: ActionReducerMap<EntityState> = {
  fonts: fromFonts.reducer,
};
