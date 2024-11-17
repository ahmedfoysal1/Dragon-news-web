import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Leftnavbar from "../components/Leftnavbar";
import Navbar from "../components/Navbar";
import RightNav from "../components/RightNav";

const Homelayouts = () => {
    return (
        <div className="font-poppins">
            <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <Latestnews></Latestnews>
            </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-2">
                <aside className="left col-span-3">
                <Leftnavbar></Leftnavbar>
                </aside>
                <section className="col-span-6">Main content</section>
                <aside className="col-span-3">
                <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default Homelayouts;