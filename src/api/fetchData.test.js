import { fetchData } from './fetchData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

test('fetchData returns data', async () => {
  const data = await fetchData();
  expect(data).toEqual({ data: 'mocked data' });
});
