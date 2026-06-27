export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 48 }}>
      <h1>Missing Headers</h1>
      <p>This app intentionally omits CSP, Referrer-Policy, Permissions-Policy, and related headers.</p>
    </main>
  );
}
