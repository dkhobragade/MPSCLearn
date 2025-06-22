import { faqs } from "@/app/lib/constants";
import { Button } from "@/app/ui/button";
import { Collapse } from "antd";

export default function FAQ ()
{
    return (
        <section className="bg-gray-50 py-16" >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our counselling services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Collapse items={ faqs } defaultActiveKey={ 1 } />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <Button text="Contact Support" onClick={ () => { } } type="primary" fullWidth={ false } />
                </div>
            </div>
        </section >
    )
}