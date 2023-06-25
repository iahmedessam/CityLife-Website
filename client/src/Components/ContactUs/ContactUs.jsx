import React, { useContext, useState, useTransition } from 'react';
import styles from './ContactUs.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../App.css'
import { DataContext } from '../../Context/Data';

export default function ContactUs() {
    // Stated
    const [showModal, setShowModal] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const {addContact} = useContext (DataContext)



    // Form Validation
    let validationSchema = Yup.object({
        Name: Yup.string().required().min(3, t("Name must be between 3 and 40 characters")).max(40),
        email: Yup.string().required().email(t("Example: example@gmail.com")),
        phone: Yup.string().required().matches(/^01[0125][0-9]{8}$/, t('Phone Must Be Egyptian Number')),
        message: Yup.string().required().min(5, t("Message must be between 5 and 500 characters")).max(500),
    });

    // Formik
    let formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setShowModal(true);
            addContact(values)
        }
    });

    return (
        <>
                <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
            <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr", textAlign: i18n.language === "ar" ? "right" : "left", }}
                className='row container mx-auto my-5 '>
                <section style={{ direction: i18n.language === "ar" ? "rtl" : "ltr", textAlign: i18n.language === "ar" ? "right" : "left", }} className='col-lg-8 px-5 shadow-sm '>
                    <div className='container'>
                        <div className='my-3'>
                            <h3 style={{ direction: i18n.language === "ar" ? "rtl" : "ltr", textAlign: i18n.language === "ar" ? "right" : "left", }} > {t("Get in touch")}</h3>
                            <h5 className={`${styles.lightFont}`}>{t("We will answer your questions and problems")}</h5>
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit} >

                                {/* Name */}
                                <div className="form-group my-0">
                                    <label htmlFor="Name" className='mb-2'>{t("Name")}</label>
                                    <input onBlur={formik.handleBlur} autoComplete="off" placeholder={t("Enter your name")} className={`form-control  mb-2   ${formik.touched.Name && formik.errors.Name ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.name} type='text' name='Name' id='Name' />
                                    {formik.errors.Name && formik.touched.Name ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.Name}</span> : <span className=' opacity-0'> lorem </span>}
                                </div>

                                {/* Email */}
                                <div className="form-group my-0">
                                    <label htmlFor="email" className='mb-2'>{t("Email")}</label>
                                    <input onBlur={formik.handleBlur} autoComplete="off" placeholder={t("Enter your email")} className={`form-control mb-2 w-100 ${styles.input} ${formik.touched.email && formik.errors.email ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email'></input>
                                    {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                                </div>

                                {/* Phone */}
                                <div className="form-group my-0">
                                    <label htmlFor="phone" className='mb-2'>{t("Phone")}</label>
                                    <input onBlur={formik.handleBlur} autoComplete="off" placeholder={t("Enter your phone number")} className={`form-control mb-2 w-100 ${styles.input} ${formik.touched.phone && formik.errors.phone ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.phone} type='tel' name='phone' id='phone'></input>
                                    {formik.errors.phone && formik.touched.phone ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.phone}</span> : <span className=' opacity-0'> lorem </span>}
                                </div>

                                {/* Message */}
                                <div className="form-group my-0">
                                    <label htmlFor="message" className='mb-2'>{t("Message")}</label>
                                    <textarea onBlur={formik.handleBlur} autoComplete="off" placeholder={t("Leave your message")} className={`form-control mb-2 w-100 ${styles.input} ${styles.textArea_noResize} ${formik.touched.message && formik.errors.message ? styles.alert : styles.input}`} rows={10} onChange={formik.handleChange} value={formik.values.message} type='text' name='message' id='message'></textarea>
                                    {formik.errors.message && formik.touched.message ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.message}</span> : <span className=' opacity-0'> lorem </span>}
                                </div>

                                {/* Submit */}
                                <button disabled={!(formik.isValid && formik.dirty)} type='submit' data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-mainColor rounded rounded-2 danger w-50 d-block mx-auto py-2  my-3">{t("Submit")}</button>
                            </form>
                        </div>
                    </div>
                </section>


                {/* Right Section */}
                <section className={`col-lg-4 px-3 rounded rounded-4`}>
                    <div className='container my-3 shadow-sm py-4'>
                        <h4 className='text-center'>{t("Contact us")}</h4>

                        {/* Email */}
                        <div className='Email-Section mb-5 mt-3'>
                            <h4>{t("Email")}:</h4>
                            <h5 className={`${styles.lightFont}`}>Rehab@gmail.com </h5>
                            <h5 className={`${styles.lightFont}`}>city.hall@gmail.com</h5>
                        </div>

                        {/* Telephone */}
                        <div className='Telephone-Section my-5'>
                            <h4>{t("Telephone")}:</h4>
                            <h5 className={`${styles.lightFont}`}>+20 87 48 121 </h5>
                            <h5 className={`${styles.lightFont}`}>+20 87 48 122</h5>
                            <h5 className={`${styles.lightFont}`}>+20 87 48 123</h5>
                        </div>

                        {/* Phone */}
                        <div className='Phone-Section my-5'>
                            <h4>{t("Phone")}:</h4>
                            <h5 className={`${styles.lightFont}`}> +20 111 28 90765 </h5>
                            <h5 className={`${styles.lightFont}`}> +20 112 28 90765 </h5>
                            <h5 className={`${styles.lightFont}`}> +20 101 28 90765 </h5>
                        </div>

                        {/* City Hall Location */}
                        <div className='Location-Section'>
                            <h3>{t("City Hall Location")}</h3>
                            <iframe className='w-100 rounded rounded-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3247936468965!2d31.48897794067131!3d30.05622321811579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145818877c6420e1%3A0x1349a9d9b21a0405!2sREHAB%20CITY!5e0!3m2!1sen!2seg!4v1686232817105!5m2!1sen!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>
            </div>

            {/* POP UP */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body mx-auto fs-4">
                            {t("Message Sent Successfully")}
                        </div>
                        <i className="fa-solid fa-check  fs-1 mx-auto" style={{ color: "#2aa509" }}></i>
                        <div className="modal-footer border-0 w-100">
                            <button onClick={() => navigate('/')} type="button" className="w-50 mx-auto  btn btn-primary text-white" data-bs-dismiss="modal">{t("Close")}</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
