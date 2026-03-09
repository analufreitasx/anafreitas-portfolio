import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#12102a',
            color: '#ABB2BF',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        
        }}>
            <Header />
            <main style={{ padding: '2rem', flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
