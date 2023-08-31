export default function generateAccountNumber() {
  const lowerAccountNumberRange: number = 0;
  const upperAccountNumberRange: number = 9999999999;

  return Math.floor(
    lowerAccountNumberRange + Math.random() * upperAccountNumberRange
  );
}
