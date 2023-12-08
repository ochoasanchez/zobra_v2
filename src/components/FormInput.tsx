const FormInput = ({ name } : { name : string }) => {
    return ( 
        <div className="flex flex-col mt-6">
            <label htmlFor="name">{name}</label>
            <input type="text" className="mt-1 border lg:w-3/5"/>
        </div>
    )
}

export default FormInput;