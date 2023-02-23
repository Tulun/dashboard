import useOnboard from "../hooks/useOnboard";

function App() {
  const { wallet, connecting, connect, disconnect } = useOnboard();

  return (
    <div>
      <button
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
      </button>
    </div>
  );
}

export default App;
