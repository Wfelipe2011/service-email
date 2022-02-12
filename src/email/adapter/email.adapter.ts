export interface ConfigEmailAdapter {
  to: string | string[] | any;
  cc?: string | string[];
  from: string;
  text?: string;
  subject?: string;
  html?: string;
  content?: any | null;
}

export interface EmailAdapter {
  send(configMsg: ConfigEmailAdapter): Promise<void>;
}
