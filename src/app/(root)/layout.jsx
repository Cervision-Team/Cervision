import Footer from "@/src/components/core/Footer";
import Header from "@/src/components/core/Header";

export default function Layout({ children }) {
    
    return (
            <main>
                <Header />
                {children}
                <Footer />             
            </main>
    )
}