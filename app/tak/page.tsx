import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThankYouView } from "@/components/ThankYouView";

export default function TakPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] border-b border-zinc-200 bg-zinc-50">
        <ThankYouView />
      </main>
      <Footer />
    </>
  );
}
