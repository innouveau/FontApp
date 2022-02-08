import {Action, createReducer, on} from '@ngrx/store';
import { Font } from 'shared/types';

// import * as FontActions from '../actions';

export interface FontState {
  fonts: Font[];
  search: string;
}

export const initialState: FontState = {
  fonts: [],
  search: ""
};
//
// function modifyHeroState(
//   heroState: HeroState,
//   heroChanges: Partial<Hero>
// ): HeroState {
//   return {
//     ...heroState,
//     loading: false,
//     heroes: heroState.heroes.map(h => {
//       if (h.id === heroChanges.id) {
//         return {...h, ...heroChanges};
//       } else {
//         return h;
//       }
//     })
//   };
// }

const fontReducer = createReducer(
  initialState,
);

export function reducer(state: FontState | undefined, action: Action) {
  return fontReducer(state, action);
}
