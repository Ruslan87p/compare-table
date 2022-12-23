export type DiffTableFormat = 'SideBySide';
export type SideDiff = 'both' | 'left' | 'right';

export interface DiffContent {
  leftContent: string;
  rightContent: string;
}

export interface DiffPart {
  content: string;
  isDiff: boolean;
}

export interface DiffTableRowResult {
  leftContent: any;
  rightContent: any;
  belongTo: SideDiff;
  hasDiffs: boolean;
  numDiffs: number;
}

export interface DiffResults {
  hasDiff: boolean;
  diffsCount: number;
  rowsWithDiff: {
    leftLineNumber?: number;
    rightLineNumber?: number;
    numDiffs: number;
  }[];
}
