import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";

export default function Layout({ children }) {
    
    return (
            <main>
                <Header />
                {children}
                <Footer />             
            </main>
    )
}