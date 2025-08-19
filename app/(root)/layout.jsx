import Header from "@/components/core/Header";

export default function Layout({ children }) {
    
    return (
            <main>
                <Header />
                {children}             
            </main>
    )
}