import React from 'react';

const Blogs = () => {
    return (
        <div className='container question my-5'>
            <h2 className="text-center fw-bold my-5 faq">Frequently Asked Questions</h2>

            <div id="accordionExample">
                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            কেন আপনি ফায়ারবেস ব্যবহার করছেন? অথেনটিকেশন বাস্তবায়নের জন্য আপনার কাছে অন্য কোন বিকল্প আছে?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>রিএক্ট এর গুণ হল এর সিম্প্লিসিটি। এটি মূল জাভাস্ক্রিপ্টের পাশাপাশি JSX নামে একটি বিশেষ সিনট্যাক্স ব্যবহার করে যা আমাদের জাভাস্ক্রিপ্টের ভিতরে 100% HTML লিখতে দেয়। এখন ব্রাউজার বিহ্যাইন্ড দ্যা সীনে একটা ডম ট্রি তৈরি করে যাতে ব্যবহারকারী সেই ডম ট্রি এর সাথে যোগাযোগ করতে পারে। তারপর আমাদের সামনে একটি ওয়েবপেজ উপস্থিত হয়। কিন্তু আমরা জানি যে জাভাস্ক্রিপ্ট DOM ম্যানিপুলেট করতে পারে। সুতরাং জাভাস্ক্রিপ্ট দিয়ে রেন্ডার কমপ্লিট হওয়া কোন পেজের ডম ম্যানিপুলেট করলে সেই ওয়েবপেজ আবার পুরোপুরি রেন্ডার হয়(দুই একটা লেটেস্ট ব্রাউজার ছাড়া বাকী বেশীরভাগ ব্রাউজারই পুরোপুরি নতুন করে আবার ডম ট্রি তৈরী করে রেন্ডার করে) যেটা সময় সাপেক্ষ। আর তাই একটা পেজে ডম ম্যানিপুলেট করার মতো ততো বেশী জাভাস্ক্রিপ্ট থাকলে সেই ওয়েবপেজ স্লো হয়ে যাবে। তাই এখানেই রিঅ্যাক্ট এর আসল খেলা।</strong>
                        </div>
                    </div>
                </div>


                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            অথোরাইজেশন এবং অথেনটিকেশন এর মধ্যে পার্থক্য কি?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong><b>অথেনটিকেশন:</b> <br></br>
                                i. অথেনটিকেশন ব্যবহারকারী কে তা যাচাই করে।<br></br>

                                ii. পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে অথেনটিকেশন কাজ করে।<br></br>

                                iii. এটি একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ।<br></br>

                                iv. অথেনটিকেশন ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তনযোগ্য।<br></br> <br />

                                <b>অথোরাইজেশন:</b> <br></br>
                                i. অথোরাইজেশন নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।<br></br>

                                ii. অথোরাইজেশন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।<br></br>

                                iii. অথোরাইজেশন সবসময় অথেনটিকেশন এর পরে জায়গা নেয়।<br></br>

                                iv. এটি ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়।</strong><br></br>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            ইউজস্টেট কিভাবে কাজ করে?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>এটি হল একটি হুক (ফাংশন) যা আপনাকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল রাখতে দেয়। আপনি এই ফাংশনে প্রাথমিক অবস্থা পাস করেন এবং এটি বর্তমান অবস্থার মান (প্রাথমিক অবস্থা নয়) সহ একটি পরিবর্তনশীল প্রদান করে এবং এই মানটি আপডেট করার জন্য অন্য একটি ফাংশন প্রদান করে।</strong>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Blogs;