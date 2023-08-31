export default function validateAccountNumber(accountNumber: string) {
  const convertedAccountNumber = parseInt(accountNumber);
  return (
    typeof convertedAccountNumber === "number" && accountNumber.length === 10
  );
}
