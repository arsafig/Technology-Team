import { NoNuloPipe } from './no-nulo.pipe';

describe('NoNuloPipe', () => {
  it('create an instance', () => {
    const pipe = new NoNuloPipe();
    expect(pipe).toBeTruthy();
  });
});
