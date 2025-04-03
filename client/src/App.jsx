import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UserList from './components/Userlist';

function App() {

    return (
        <>

            {/* <!-- Header component --> */}
            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                {/* <!-- Section component  --> */}
                <UserList />

                {/* <!-- User details component  --> */}
                

                {/* <!-- Delete user component  --> */}
                

            </main>
            {/* <!-- Footer component  --> */}
            <Footer />
        </>
    )
}

export default App
