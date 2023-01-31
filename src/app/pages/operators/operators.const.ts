const pathCombination: string = '/operators/combination/';
const pathConditional: string = '/operators/conditional/';
const pathCreation: string = '/operators/creation/';
const pathErrorHandling: string = '/operators/errorHandling/';
const pathFiltering: string = '/operators/filtering/';
const pathMulticasting: string = '/operators/multicasting/';
const pathTransformation: string = '/operators/transformation/';
const pathUtility: string = '/operators/utility/';

export const mapOfOperators = new Map([
  [
    'combination',
    [
      ['combineLatest', pathCombination + 'combineLatest'],
      ['concat', pathCombination + 'concat'],
      ['forkJoin', pathCombination + 'forkJoin'],
      ['merge', pathCombination + 'merge'],
      ['startWith', pathCombination + 'startWith'],
      ['withLatestFrom', pathCombination + 'withLatestFrom'],
    ],
  ],
  [
    'conditional',
    [
      ['defaultEmpty', pathConditional + 'defaultEmpty'],
      ['every', pathConditional + 'every'],
      ['sequenceequal', pathConditional + 'sequenceequal'],
      ['iif', pathConditional + 'iif'],
    ],
  ],
  [
    'creation',
    [
      ['from', pathCreation + 'from'],
      ['fromEvent', pathCreation + 'fromEvent'],
      ['interval', pathCreation + 'interval'],
      ['of', pathCreation + 'of'],
      ['timer', pathCreation + 'timer'],
    ],
  ],
  [
    'errorHandling',
    [
      ['catchError', pathErrorHandling + 'catchError'],
      ['retry', pathErrorHandling + 'retry'],
    ],
  ],
  [
    'filtering',
    [
      ['debounceTime', pathFiltering + 'debounceTime'],
      ['distinctUntilChanged', pathFiltering + 'distinctUntilChanged'],
      ['distinctUntilKeyChanged', pathFiltering + 'distinctUntilKeyChanged'],
      ['filter', pathFiltering + 'filter'],
      ['take', pathFiltering + 'take'],
      ['takeUntil', pathFiltering + 'takeUntil'],
    ],
  ],
  [
    'multicasting',
    [
      ['share', pathMulticasting + 'share'],
      ['shareReplay', pathMulticasting + 'shareReplay'],
    ],
  ],
  [
    'transformation',
    [
      ['bufferTime', pathTransformation + 'bufferTime'],
      ['concatMap', pathTransformation + 'concatMap'],
      ['flatMap', pathTransformation + 'flatMap'],
      ['map', pathTransformation + 'map'],
      ['mergeMap', pathTransformation + 'mergeMap'],
      ['scan', pathTransformation + 'scan'],
      ['switchMap', pathTransformation + 'switchMap'],
    ],
  ],
  [
    'utility',
    [
      ['delay', pathUtility + 'delay'],
      ['do', pathUtility + 'do'],
      ['finalize', pathUtility + 'finalize'],
      ['tap', pathUtility + 'tap'],
    ],
  ],
]);
