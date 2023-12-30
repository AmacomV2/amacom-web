export interface dataModalView {
  data: any;
  config: configModalView[];
}

export interface configModalView {
    label: string;
    key: string;
    type?: 'date' | 'uuid' | 'string';
}
