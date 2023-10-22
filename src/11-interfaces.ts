export interface Driver {
  database: string;
  username: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const driver: Driver = {
  database: '',
  username: '',
  password: '',
  port: 0,
  connect() {
  },
  disconnect() {
  },
  isConnected(name: string): boolean {
    return false;
  }
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number
  ) {}
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }

  disconnect(): void {

  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number
  ) {}
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }

  disconnect(): void {

  }
}
