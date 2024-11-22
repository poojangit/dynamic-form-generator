import validateJSON from '../utils/validateJSON';

test('validates correct JSON', () => {
  const validJSON = '{"name": "test"}';
  expect(validateJSON(validJSON)).toBe(true);
});

test('invalidates incorrect JSON', () => {
  const invalidJSON = '{"name": "test"';
  expect(validateJSON(invalidJSON)).toBe(false);
});
