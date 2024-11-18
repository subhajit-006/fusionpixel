import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import ContactUsContent from "../components/ContactUsContent";

function ContactUsPage() {
    return (
        <>
            {/*Navbar*/}
            <Navbar />

            <div className="flex items-center justify-between px-20 h-[83vh] bg-[url('/assets/contactBg.png')] bg-cover bg-center">
                {/*Contact Us Content*/}
                <ContactUsContent />

                {/*Contact Us Card*/}
                <ContactCard />
            </div>

            {/*footer*/}
            <Footer />
        </>
    )
}

export default ContactUsPage;