import { PureComponent, Fragment } from "react";
import { Helmet } from 'react-helmet';
import Sliders from '../comp/Sliders'
import FAQ from "../comp/FAQ";
import Anxirty from "./ServicePages/Anxirty";
import img12 from '../images/23.png'
import Epilepsy from "./ServicePages/Epilepsy";
import Depression from "./ServicePages/Depression";
import Sleepdisorder from "./ServicePages/Sleepdisorder";
import Neuropsychiatrist from "./ServicePages/Neuropsychiatrist";
import Headache from "./ServicePages/Headache";
import OCD from "./ServicePages/OCD";
import Bipolardisorder from "./ServicePages/Bipolardisorder";
import Schizophrenia from "./ServicePages/Schizophrenia";
import Sexologist from "./ServicePages/Sexologist";
import ContactFrom from "../comp/ContactFrom";

class DetailService extends PureComponent {

    state = {
        data: [
            {
                id: 1,
                title: "epilepsy",
                faq: [
                    {
                        q: "What causes epilepsy?",
                        ans: "Epilepsy can be caused by a variety of factors, including genetics, brain injuries, brain tumors, infections, and other medical conditions."

                    }, {
                        q: "Can epilepsy be treated by epilepsy hospitals in Delhi?",
                        ans: "Yes, Epilepsy can be treated. But going to the right hospital and doctor for epilepsy can help you effectively manage the disorder."
                    },
                    {
                        q: ". What lifestyle changes does an epilepsy specialist doctor in Delhi suggest?",
                        ans: "Certain lifestyle changes do help to manage epilepsy. This includes getting enough sleep, living a stress-free and peaceful environment, avoiding alcohol and drugs, just to name a few."

                    },
                    {
                        q: "How long does it take to diagnose epilepsy?",
                        ans: "Diagnosing non-epileptic seizures and typical epilepsy symptoms takes one or two sittings for a thorough evaluation of the overall condition of the patient."
                    },
                    {
                        q: "Is there an epilepsy specialist in Delhi?",
                        ans: "Yes. Dr. Vikas Moun is a renowned epilepsy specialist in West Delhi"
                    },
                    {
                        q: "Which is best hospital for epilepsy treatment in Delhi? ",
                        ans: "Dr. Vikas Mind Care in West Delhi is one of the most trusted clinics for epilepsy in Delhi. Contact 1234567890 for booking an appointment."
                    }
                ]
            },
            {
                id: 2,
                title: "anxiety",
                faq: [
                    {
                        q: "What should I do if I feel I have an anxiety disorder?",
                        ans: "Anxiety disorders need guided treatment. Don’t try tips and tricks from the internet. Seek help from a mental health professional, who will accurately diagnose and treat."

                    }, {
                        q: "Can anxiety disorder be treated by an anxiety doctor in Delhi?",
                        ans: "Yes, anxiety disorders are treated by psychiatrists. Therapy, medication, or a combination of both help treat anxiety disorders."
                    },
                    {
                        q: "Is constantly worrying a symptom of anxiety disorder?",
                        ans: "Symptoms of anxiety disorders vary as per the condition. But yes, if you worry excessively do consult a psychiatrist."

                    },
                    {
                        q: "What lifestyle changes help with anxiety treatment?",
                        ans: "Lifestyle changes such as regular exercise, stress management techniques, better sleep habits, a healthy routine and a healthy diet help manage anxiety disorder."
                    },
                    {
                        q: "Who is the best psychiatrist in Delhi for anxiety?",
                        ans: "Dr. Vikas Moun is an extremely renowned psychiatrist with vast experience in treating all kinds of anxiety disorders."
                    },
                    {
                        q: "Where can I find your clinic?",
                        ans: "Dr Vikas Mind Care is run by renowned psychiatrist Dr. Vikas Moun who has more than a decade of experience. The clinic is located in Nazafgarh road, Near Sankalp Hospital, first floor, Nangloi and has been treating hundreds with anxiety disorders for several years."
                    }
                ]

            },
            {
                id: 3,
                title: "depression",
                faq: [
                    {
                        q: "Who is a depression specialist?",
                        ans: "A depression specialist in Delhi is a psychiatrist who specializes in treating patients with depression and other mental health issues."

                    }, {
                        q: "Should I consult a doctor for depression in Delhi if I have anger issues?",
                        ans: "Yes. If a person has persistent anger issues, then consulting a doctor for depression is necessary."
                    },
                    {
                        q: "Who is the best depression doctor in Delhi NCR?",
                        ans: "Better or best are relative to one’s perception, but Dr. Vikas Moun is one of the most trusted doctors for treating depression. He is the most recommended psychiatrist practicing in Delhi NCR."
                    },
                    {
                        q: "Where can I find depression treatment in Delhi?",
                        ans: "Dr. Vikas Mind Clinic is at Nazafgarh road, Near Sankalp Hospital, First floor, Nangloi, New Delhi. It keeps client information discreet and offers coming-of-age treatment."
                    },
                    {
                        q: "Can a person undergoing depression treatment under best psychiatrist in Delhi be treated?",
                        ans: "Yes, absolutely. A patient needs to have faith in himself and the psychiatrist. Depression can be lifelong or may happen for short intervals. Psychiatrists prescribe healthy habits, therapy and medications. When one follows the prescribed regime, things do improve."
                    },
                    {
                        q: "How long does it take for a psychiatrist for depression to diagnose depression?",
                        ans: "It takes just a single sitting for an experienced psychiatrist to diagnose and start the treatment for depression."
                    }

                ]

            }, {
                id: 4,
                title: "sleep-disorder",
                faq: [
                    {
                        q: "As per a sleep disorder specialist, how can I improve my sleep quality?",
                        ans: "Doctors treating sleep disorders put emphasis on maintaining a regular sleep routine. Apart from that, avoiding screen time, caffeine, and alcohol before bedtime helps. For a comfortable sleep, darken the room, and listen to relaxing music like the sound of rain, river flowing, etc. If these don’t help, you need to visit a sleep disorder specialist."

                    },
                    {
                        q: "How do I know if I need to go for insomnia treatment in Delhi?",
                        ans: "If you are having persistent difficulty falling asleep or staying asleep, it is important to speak to an insomnia specialist in the Delhi NCR."

                    },
                    {
                        q: "Is there a specialist for treating sleep disorders in Delhi?",
                        ans: "Dr. Vikas Moun is a Somnologist that not only treat sleep disorders but also identify and treat their underlying causes. "

                    },
                    {
                        q: "Who is the best Sleep specialist doctor in Delhi NCR?",
                        ans: "Good, better, or best are relative terms and varies from person to person. Dr. Vikas Moun is a well-renowned psychiatrist who has an excellent track record of treating sleep disorders. "

                    },
                    {
                        q: "Can children have sleep disorders?",
                        ans: "Yes, children can have sleep disorders. Common sleep disorders in children include Sleep apnea, Sleepwalking (somnambulism), Sleep talking (Somniloquy), Restless Leg Syndrome, Night Terrors, etc."

                    },
                    {
                        q: "Do doctor for sleep disorders prescribe medications that make one feel drowsy throughout the day?",
                        ans: "Sleep issues may need medications. But when you go to a psychiatrist, they treat the cause that prevents one from having a good night sleep. Due to this, they may first advise lifestyle changes and only then prescribe the right medication for your issue. The right medicine will not make one feel drowsy but rather make one’s everyday life good."

                    },

                ]

            }, {
                id: 5,
                title: "neuropsychiatrist",
                faq: [
                    {
                        q: "Should I go to a psychiatrist or neuropsychiatrist for schizophrenia?",
                        ans: "You can either go to a psychiatrist or neuropsychiatrist for schizophrenia. A psychiatrist/neuropsychiatrist both study psychiatry and neurology as part of their medical education. Moreover, Dr Vikas Moun is best doctor for Schizophrenia in Delhi."

                    },
                    {
                        q: "Can consulting a neuropsychiatrist in Delhi is better for patients who have brain injury?",
                        ans: "Yes, visiting a neuropsychiatrist certainly helps in bettering the quality of life of patients suffering from various neurological disorders."

                    },
                    {
                        q: "Where can I find best neuro psychiatrist in Delhi?",
                        ans: "Dr Vikas Mind Clinic is a unique and well-known neuro psychiatry & headache clinic Delhi. Book an appointment by calling on 9588310945."

                    },
                    {
                        q: "Does neuro psychiatrist in Delhi treat comorbid ADHD and BPD in a person?",
                        ans: "Yes, neuropsychiatrists have the experience and expertise to treat comorbid ADHD and BPD mental health disorders"

                    },
                    {
                        q: "Does neuropsychiatrist in Delhi take online appointments?",
                        ans: "Yes, neuropsychiatrists do online consultation. But an offline consultation yields better diagnosis and subsequently the right treatment for patients."

                    },
                    {
                        q: "Who should visit a neuro psychiatry & headache clinic Delhi?",
                        ans: "Neuropsychiatrists treat patients who have abnormal motor, cognitive or mental issues due to any damage or malfunction in the nervous system including the brain. A neuropsychiatrist helps treat the behavioural, emotional, and cognitive conditions arising from it. Apart from that, a neuropsychiatrist also helps with other mental health disorders."

                    },

                ]
            },
            {
                id: 6,
                title: "headache",
                faq: [
                    {
                        q: "Can migraines be cured by migraine doctor?",
                        ans: "Migraines and Headaches can be treated with the right medicines. Consult a psychiatrist to know what will be best for your condition."

                    },
                    {
                        q: "As per a headache specialist in Delhi, does stress cause migraines?",
                        ans: "Yes, in a majority of cases, stress is a triggering factor for migraines and headaches"

                    },
                    {
                        q: "What kind of treatment do migraine doctor Delhi provide to treat migraine?",
                        ans: "Dr. Vikas Moun is a trusted doctor for headaches and migraine in West Delhi who prescribes one-year migraine treatment courses wherein the patients have to stay away from caffeine like tea, coffee, cold drinks. Also, they cannot do fasting. If you have persistent or recurring headaches, it’s better to consult this top psychiatrist for a proper diagnosis and the right treatment."

                    },
                    {
                        q: "What lifestyle changes do the best doctor for headache in Delhi suggest to control migraine/headaches?",
                        ans: "Maintaining a regular sleep cycle, eating a healthy diet, regularly exercising, avoiding known triggers, and reducing stress are just a few of the used changes that greatly help migraine attacks."

                    },
                    {
                        q: "How long does headache treatment in Delhi take?",
                        ans: "Healthy lifestyle changes and the right medications keep migraines or headaches regulated. Speaking to a migraine specialist will help you know better about the treatment."

                    },
                    {
                        q: "Which is the best hospital for migraine treatment in Delhi?",
                        ans: "Good, better, and best are relative terms. Dr Vikas Mind Clinic in West Delhi is a specialty clinic under one of the best psychiatrists in India. "

                    },

                ]
            },
            {
                id: 7,
                title: "OCD",
                faq: [
                    {
                        q: "Does OCD run in families?",
                        ans: "In a good number of cases, OCD may pass down in families. Remember OCD can happen because of nature and nurture. Looking at parents repeating a certain task end number of times can affect the children too to pick up the habit."

                    },
                    {
                        q: "Can OCD be surely treated by an OCD doctor in West Delhi?",
                        ans: "Yes, OCD can be treated. Going to the right clinic and doctor for OCD helps in effectively managing the disorder."

                    },
                    {
                        q: "What lifestyle changes does an OCD specialist in Delhi NCR suggest?",
                        ans: "A healthy lifestyle does a lot to manage OCD. This includes living a stress-free life, getting a good night’s sleep, taking prescribed medication and undergoing therapy, etc. just to name a few."

                    },
                    {
                        q: "Can I get pregnant if I am undergoing OCD treatment in Delhi?",
                        ans: "Obsessive Compulsive Disorder (OCD) treatment consists of certain kinds of antidepressants that may affect the health of an unborn child. Please speak to your psychiatrist about pregnancy. "

                    },
                    {
                        q: "Where can I get best OCD treatment in Delhi NCR?",
                        ans: "Book an appointment with Dr. Vikas Moun, one of the most trusted doctors for treating OCD in the young and the old."

                    },
                    {
                        q: "Does an OCD specialist in Delhi treat children with OCD symptoms?",
                        ans: "Yes, OCD develops at a young age during adolescence and young adulthood. Getting the right line of treatment from a psychiatrist or a mental disorder specialty clinic like Dr Vikas Mind Clinic will better diagnose and treat your condition."

                    },

                ]
            },
            {
                id: 8,
                title: "bipolar-disorder",
                faq: [
                    {
                        q: "Is bipolar disorder treatment in West Delhi good?",
                        ans: "Yes, with experienced psychiatrists, bipolar disorder has excellent treatment in Delhi."

                    },
                    {
                        q: " Does consuming alcohol make bipolar disorder worse?",
                        ans: "Any kind of addiction like alcohol and drugs makes managing peaks and troughs of bipolar disorder tough. Keeping away from them will contribute to a balanced life."

                    },
                    {
                        q: " I think I have bipolar disorder, what do I do?",
                        ans: "If you are undergoing treatment from a psychiatrist, follow their prescribed medications and therapy.In case, you haven’t yet gone to a doctor for a diagnosis, book an appointment with best doctor for bipolar disorder in West Delhi."

                    },
                    {
                        q: " Is depression and bipolar disorder the same?",
                        ans: "No, depression and bipolar disorder are typically different disorders with similar symptoms. A psychiatrist or a mental disorder specialty clinic like Dr. Vikas Mind Clinic will better diagnose and treat your condition. Here you’ll find specialised depression doctor in Delhi as well as for bipolar disorder"

                    },
                    {
                        q: "Can one live with a patient of bipolar disorder?",
                        ans: "It is safe to live a life with a patient of bipolar disorder who takes medication, goes for therapy and follows the right line of treatment as prescribed by their psychiatrist."

                    },
                    {
                        q: " Can I get pregnant if I am undergoing bipolar disorder treatment in Delhi?",
                        ans: " Bipolar Disorder treatments consist of medications that affect the unborn child. Please speak to your psychiatrist about pregnancy."

                    },

                ]
            },
            {
                id: 9,

                title: "schizophrenia",
                faq: [
                    {
                        q: "What if someone with schizophrenia runs away from schizophrenia treatment in Delhi?",
                        ans: "Schizophrenia patients have their own imaginary thoughts and beliefs. Not adhering to treatment will worsen their mental condition and can pose a threat to themselves and those around them."

                    },
                    {
                        q: "Does schizophrenia psychiatrist find childhood trauma as a cause of schizophrenia?",
                        ans: "In schizophrenia, the structure and functioning of the brain are different. Severe childhood trauma can affect brain functioning but is not a reason for schizophrenia."

                    },
                    {
                        q: "Can schizophrenia be treated by best psychiatrist for schizophrenia?",
                        ans: "Yes, schizophrenia can be treated and managed through the right treatment, therapy and support."

                    },
                    {
                        q: "Should I go to a psychiatrist specialising in schizophrenia if I hear voices?",
                        ans: "You must seek medical help from a reputed psychiatrist specialising in schizophrenia if you feel like you are hearing voices. The sooner one is diagnosed and treated, the better it is for you."

                    },
                    {
                        q: "What lifestyle changes do best psychiatrist for schizophrenia in Delhi NCR recommend to manage schizophrenia?",
                        ans: "A healthy lifestyle and being attached to a schizophrenia rehabilitation centre help in a better life with schizophrenia."

                    },
                    {
                        q: "Where can I take my mother for psychosis treatment in Delhi?",
                        ans: "Dr. Vikas Moun is an experienced and reputed psychiatrist who specializes in psychosis. He also has a specialty clinic Dr Vikas Mind Clinic in West Delhi."

                    },

                ]

            },
            {
                id: 10,
                img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                title: "sexologist",
                faq: [
                    {
                        q: "What kind of services does a male sexologist in Delhi offer?",
                        ans: "In Delhi, a sex doctor offers complete diagnosis, guidance and treatment for various sexual health issues."
                    },
                    {
                        q: "What are the signs of best sexologist Delhi?",
                        ans: "A great sex doctor pays proper attention to customer issues. With their appropriate qualifications and vast experience, they provide the right line of diagnosis and treatment."
                    },
                    {
                        q: "Who is the best sexologist doctor in Delhi NCR?",
                        ans: "Dr. Vikas Moun is a well-renowned and trusted sexologist practicing in Delhi NCR. "
                    },
                    {
                        q: "Can a sex doctor in Delhi NCR help me with anxiety issues in my sexual relationship?",
                        ans: "Sexual issues are not always physical. There are times when mental and psychological issues hinder a great sexual relationship. And that’s where one needs a sexologist to treat ailments. Dr Vikas is the best psychiatrist in Delhi that has expertise in multiple issues related to brain. He will surely help you out with a solution."
                    },
                    {
                        q: "What is the difference between a gynaecologist and a sexologist in Delhi?",
                        ans: "A gynaecologist specialises in the reproductive system of females. Whereas a sexologist is someone who helps males and females with the physical, mental and psychological issues related to sexual health."
                    },
                    {
                        q: "What kind of diseases does a gupt rog doctor in Delhi NCR treat?",
                        ans: "A gupt rog specialist is someone who specialises in treating sex problems like erectile dysfunction, premature ejaculation, porn addiction, etc."
                    },
                ]
            }
        ],

    }



    render() {
        let { data } = this.state
        let { name } = this.props.match.params
        let arr = data.find((e) => {
            let lower =name.toLowerCase()
            if (lower.includes(e.title.toLowerCase())) {
                return e
            }
        })

// console.log(arr) 
        return (
            <Fragment>
                {arr.title === "anxiety" ? <>
                    <Anxirty />
                </>
                    : arr.title === "epilepsy" ? <>
                        <Epilepsy />
                    </> :
                        arr.title === "depression" ? <>
                            <Depression />
                        </> :
                            arr.title === "sleep-disorder" ? <>
                                <Sleepdisorder />
                            </> :
                                arr.title === "neuropsychiatrist" ?
                                    <>
                                        <Neuropsychiatrist />
                                    </> :
                                    arr.title === "headache" ?
                                        <>
                                            <Headache />
                                        </> :
                                        arr.title === "OCD" ? <>
                                            <OCD />
                                        </>
                                            : arr.title === "bipolar-disorder" ? <>
                                                <Bipolardisorder />
                                            </> : arr.title === "schizophrenia" ? <>
                                                <Schizophrenia />
                                            </> :
                                                arr.title === "sexologist" ? <>
                                                    <Sexologist />
                                                </> :

                                                    <>
                                                        <h1>No Data</h1>
                                                    </>}


                {/*  client says */}
                <div className='landingClientSays' style={{marginTop:"8px"}}>
                    <div className="me-2 ms-2" >
                        <div className="container">
                            <h2 class="blue text-center pt-4"  >
                                What our <span className='green'> clients says</span>
                            </h2>
                            <Sliders />
                        </div>
                    </div>
                </div>

                <div className="me-2 ms-2 hadingspace">
                    <div className="mt-4 container" >
                        <div className="row">
                            <div className="col-md-7 ">
                                <iframe
                                    
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.539402923576!2d77.0646746!3d28.6781322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0951449365ff%3A0xae56d0cb508f2d32!2sDr%20Vikas%20Mind%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1691764525188!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    frameborder="0"
                                    // style="border:0;"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                                </iframe>
                            </div>
                            <div className="col-md-5 bg-white">

                                <div className="bg-white">
                                    <h2 class="blue mt-4 text-center">
                                        Contact with us
                                    </h2>
                                    <div className="mt-4">
                                        <ContactFrom/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="me-2 ms-2 hadingspace handingSpaceBottom">

                    {/* FAQ */}

                    <FAQ list={arr.faq} />

                </div>
            </Fragment>
        )
    }
}
export default DetailService;