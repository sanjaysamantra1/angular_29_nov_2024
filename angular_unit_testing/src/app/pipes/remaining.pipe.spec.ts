import { RemainingPipe } from "./remaining.pipe"

describe('Describe for remaining Pipe', () => {
  it('It for remaining pipe', () => {
    let remainingPipe = new RemainingPipe();
    expect(remainingPipe.transform('Hello')).toBe(145);
    expect(remainingPipe.transform('ABCD')).toBe(146);
  })
})