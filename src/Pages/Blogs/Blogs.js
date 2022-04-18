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
                            <strong>
                                ফায়ারবেস অথেনটিকেশন ব্যাকএন্ড পরিষেবা প্রদান করে। এটি ব্যবহার করা সহজ SDK এবং আপনার অ্যাপে ব্যবহারকারীদের অথেনটিকেশন এর জন্য তৈরি UI লাইব্রেরি। এটি পাসওয়ার্ড, ফোন নম্বর, গুগল, ফেসবুক এবং টুইটারের মতো জনপ্রিয় সাইট, গিথুব, অ্যাপল স্টোর এবং আরও অনেক কিছু ব্যবহার করে প্রমাণীকরণ সমর্থন করে। ফায়ারবেস রিয়েলটাইম ডেটাবেস আপনাকে সরাসরি ক্লায়েন্ট-সাইড কোড থেকে ডাটাবেসে নিরাপদ অ্যাক্সেসের অনুমতি দিয়ে সমৃদ্ধ, সহযোগী অ্যাপ্লিকেশন তৈরি করতে দেয়। ডেটা স্থানীয়ভাবে বজায় থাকে, এবং অফলাইনে থাকাকালীনও, রিয়েলটাইম ইভেন্টগুলি অব্যাহত থাকে, যা শেষ ব্যবহারকারীকে একটি প্রতিক্রিয়াশীল অভিজ্ঞতা দেয়। <br /> <br />
                                একটি সার্ভার দ্বারা অথেনটিকেশন এর জন্য একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড ব্যবহার করা হয়৷ এছাড়াও অথেনটিকেশন এর অন্যান্য উপায়গুলি কার্ড, রেটিনা স্ক্যান, ভয়েস রিকগনিশন এবং আঙ্গুলের ছাপের মাধ্যমেও হতে পারে৷</strong>
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
                            ফায়ারবেস অথেনটিকেশন ব্যতীত অন্য কোন পরিষেবা প্রদান করে?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>You will learn about a number of Firebase rivals in this section. Some are newer businesses, but they nevertheless provide valuable services to developers: <br />
                                1. Parse – Open Source Backend Platform. <br />
                                2. Back4app – Parse Hosting Platform. <br />
                                3. Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise. <br />
                                4.Backendless – Mobile Backend and API Services Platform. <br />
                                5.Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects. <br />
                                6.Pubnub – Real-time APIs and Global Messaging. <br />
                                7.Kumulos – App Performance Management. <br />
                                8.Game Sparks – Game Backend Platform. <br />
                                9.Hoodie – Generic backend with a client API for Offline First application. <br />
                                10.Appwrite – Open-Source backend for Flutter developers  <br />
                                11.Deployd – Simple core library, with a modular API for your application. <br />
                                12.NHost – Accelerates development and provides full control. <br />
                                13.Amplify JS – Open-source Javascript framework.
                            </strong>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Blogs;