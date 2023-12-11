import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";
import { contact } from '../data.constants'

export function Contact() {
    return (
        <>
            <PageHeader />
            <main>
                <section className="page-section">
                    <div>
                        <h1 className="text-center md:text-left text-4xl md:text-6xl">Contact us</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-16 mt-0">
                        <div className="md:w-4/12 mt-6">
                            <p className="text-justify">If you have an inquiry about our wines or services fill out the contact form. Please fill out the form as detailed as possible in order to serve you the best. Thank you for sharing your comments and suggestions with us.</p>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>
            <PageSection item={contact} imgPosition='top' imgSize='small'/>
            <Footer />
        </>
    )
}

export default Contact;