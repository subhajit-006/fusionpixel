import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactUsCard from "../components/ui/ContactUsCard";
import ContactUsContent from "../components/ContactUsContent";
import Cursor from "../components/ui/Cursor";

function ContactUsPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#0E3332]">
                {/*Navbar*/}
                <Navbar />
                <div className="flex items-center xl:flex-row flex-col justify-center xl:justify-between xl:px-20 xl:h-[83vh] h-[120vh] bg-[url('/assets/contactBg.png')] bg-cover bg-center">
                    {/*Contact Us Content*/}
                    <ContactUsContent />

                    {/*Contact Us Card*/}
                    <ContactUsCard />
                </div>
            </div>

            {/*footer*/}
            <Footer />
        </>
    )
}

export default ContactUsPage;