export interface FormControlsInterface {
  publicationType: string[] | null;
  termType: string[] | null;
  reportFormat: string[] | null;
  reportGroup: string[] | null;
  reportState: string[] | null;
  outputDate: {
    from: string;
    to: string;
  };
  outputNumber: [] | null;
}
