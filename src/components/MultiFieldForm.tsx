import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldForm = () => {
    // Δηλωνουμε τα states
    const [values, setValues] = useState<FormValues>(initialValues)
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null)

    // Δηλωνουμε τις συναρτησεις
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setValues(prev => ({
                ...prev,
                [name] : value,
            }))
    }

    const handleClear = () => {
        setValues(initialValues)
        setSubmittedData(null)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmittedData(values)
        setValues(initialValues)
    }


    return (
        <>
            <div className="flex text-center max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit} className="mx-auto max-w-md mt-8 space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border "
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border "
                        required
                    />

                    <textarea
                    name="message"
                    value={values.message}
                    placeholder="Message"
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border "
                    required
                    >
                    </textarea>

                    <div className="flex gap-4">
                        <button className="bg-cf-dark-red text-white px-4 py-2 rounded" type="submit">
                            Submit
                        </button>

                        <button className="bg-gray-200 text-cf-gray px-4 py-2 rounded" type="button" onClick={handleClear}>
                            Clear
                        </button>
                    </div>

                    { submittedData && (
                    <div className="mt-6 border-t pt-4 space-y-2">

                        <h2 className="font-semibold text-cf-dark-red">Submitted Data</h2>
                        <p><strong>Name:</strong> {submittedData.name} </p>
                        <p><strong>Email:</strong> {submittedData.email} </p>
                        <p><strong>Message:</strong> {submittedData.message} </p>

                    </div>

                    )}

                </form>

            </div>

        </>
    )
}
export default MultiFieldForm;