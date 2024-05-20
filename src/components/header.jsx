import {
  MainButton,
  WebAppProvider,
  useShowPopup,
} from "@vkruglikov/react-telegram-web-app";

export default function Header() {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: "Hello, I am popup",
    });

  return (
    <header>
      <WebAppProvider
        options={{
          smoothButtonsTransition: true,
        }}
      >
        <h2 style={{ color: "white" }}>Ruben Gabrielyan</h2>
        <MainButton text="SHOW POPUP" onClick={handleClick} />
      </WebAppProvider>
    </header>
  );
}
