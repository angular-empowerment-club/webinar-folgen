import { UpperOrLowercasePipe } from './upper-or-lowercase.pipe';

describe('UpperOrLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UpperOrLowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
