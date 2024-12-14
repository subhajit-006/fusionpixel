import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import ContactUsContent from "../components/ContactUsContent";
import Cursor from "../components/ui/Cursor";

function ContactUsPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#DFF2EB]">
                {/*Navbar*/}
                <Navbar />
                <div className="flex items-center xl:flex-row flex-col justify-center xl:justify-between xl:px-20 xl:h-[83vh] h-[120vh] bg-[url('/assets/contactBg.png')] bg-cover bg-center">
                    {/*Contact Us Content*/}
                    <ContactUsContent />

                    {/*Contact Us Card*/}
                    <ContactCard />
                </div>
            </div>

            {/*footer*/}
            <Footer />
        </>
    )
}

export default ContactUsPage;