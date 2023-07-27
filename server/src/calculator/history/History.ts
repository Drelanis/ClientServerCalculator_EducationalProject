interface IHistoryItem {
  id: number;
  exression: string;
  result: string;
}

class History {
  private history: Partial<IHistoryItem[]> = [
    { id: 1, exression: '2+2', result: '4' },
    { id: 2, exression: '3+3', result: '6' },
    { id: 3, exression: '4+4', result: '8' },
    { id: 4, exression: '5+5', result: '10' },
    { id: 5, exression: '6+6', result: '12' },
    { id: 6, exression: '7+7', result: '14' },
    { id: 7, exression: '8+8', result: '16' },
    { id: 8, exression: '9+9', result: '18' },
    { id: 9, exression: '10++10', result: 'Error' },
  ];

  public get(): IHistoryItem[] {
    return this.history;
  }
}

export default new History();
