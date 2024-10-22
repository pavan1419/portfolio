import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from './useCustomHook';

test('should increment counter', () => {
  const { result } = renderHook(() => useCustomHook());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
