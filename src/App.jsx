import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SocialAuth from "./components/SocialAuth";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Header />
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <LoginForm />
            <SocialAuth />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
