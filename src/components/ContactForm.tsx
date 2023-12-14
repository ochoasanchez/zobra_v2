import ButtonLink from "./ButtonLink";
import FormInput from "./FormInput";

const ContactForm = () => {
    return (
        <form className="lg:w-8/12">
            <FormInput name="Name" />
            <FormInput name="Email"/>
            <FormInput name="Phone" />
            <FormInput name="Subject" />
            <div className="flex flex-col mt-4">
                <label htmlFor="name">Message</label>
                <textarea className="mt-1 border" rows={4} />
            </div>
            <div className="mt-6" >
                <ButtonLink name="Send" to="#" />
            </div>
        </form>
    )
}

export default ContactForm;