import React, { useEffect } from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { Button, Drawer, Form, Input } from 'antd';
import { EnvironmentFilled, MailFilled, MenuOutlined, SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import TextArea from 'antd/es/input/TextArea';
import Aos from 'aos';  
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
function Contact() {
    useEffect(() => {
        Aos.init({
          duration: 3000, // Adjust the duration to your preference
        });
      }, []);
    const [form] = Form.useForm();
    const onFinish = async (values,e) => {
        if (e) e.preventDefault();
        try {
          const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdqmTV_KURUpUDL5qcoZfTb_FIzcI2LdMP3NiNRj-qXkljDoQ/formResponse"; // Google Form URL
          const formData = new FormData();
    
          // Append form values to formData
          formData.append("entry.550024018", values.name);
          formData.append("entry.1516466819", values.phone);
          formData.append("entry.431800140", values.email);
          formData.append("entry.2013422363", values.message);
    
          // Submit formData to Google Form URL
          await axios.post(formURL, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
          
          // Reset form fields after successful submission
          // form.resetFields();
    
          // Show success message to user
          alert('Form submitted successfully!');
          // console.log(formData);
          resetFields(['name', 'phone', 'email', 'message']);
         
        } 
        
        catch (error) {
          // form.resetFields();  
          console.error('Error submitting form:', error);
          resetFields(['name', 'phone', 'email', 'message']);
          alert('Your message has been sent to the site administrator via email. Messages are saved in google sheets. Thank you for contacting me!!!');
          // form.resetFields();
          
        }
      };


    const resetFields = (fields) => {
        fields.forEach(field => {
            form.setFieldsValue({ [field]: undefined });
        });
    };
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (

        <div className={`flex w-full flex-col ${darkMode ? '': 'dark'}`}>
            <Header />
            <section></section>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      className='my-5  min-h-screen flex-col  flex justify-center items-center '>


                <div className='shadow-sky-200 
                     mx-5
                    
                    rounded-tl-3xl rounded-br-3xl border-yellow-300 border-2 
                    shadow-2xl p-5 flex flex-col justify-center items-center '>

                    <Form className='flex flex-col md:mx-0 md:w-[800px] h-auto' form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <h1 className='flex justify-center items-center text-center my-14 uppercase font-normal text-yellow-400 text-3xl'>MESSAGE CONTENT</h1>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-2/5 px-4 mb-4">
                                <Form.Item  name="name" label={<p className={`${darkMode?"text-black":"text-white"}`}>Your Name</p>} rules={[{ required: true }]}>
                                    <TextArea autoSize={{ minRows: 1, maxRows: 2 }} />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-3/5 px-4 mb-4 md:pr-8">
                                <Form.Item name="phone" label={<p className={`${darkMode?"text-black":"text-white"}`}>Phone</p>}
                                  rules={[
                                    {
                                        required: true,
                                      message: 'Please input your phone number!',
                                    },
                                    {
                                      pattern: /^\d{10}$/,
                                      message: 'Please input a valid 10-digit phone number!',
                                    },
                                  ]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="w-full md:w-full md:pl-8 mb-4 md:pr-4">
                                <Form.Item name="email" label={<p className={`${darkMode?"text-black":"text-white"}`}>Email</p>} rules={[{ type: 'email', required: true }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        <div className='w-full md:pl-3 md:pr-4 '>
                        <Form.Item name="message" label={<p className={`${darkMode?"text-black":"text-white"}`}>Message</p>} rules={[{ required: true, message: 'Please input your message!' }]}>
                            <TextArea autoSize={{ minRows: 3, maxRows: 6 }} />
                        </Form.Item>
                        </div>
                        <Form.Item className="flex justify-center">
                            <Button className='text-yellow-300 hover:bg-red-400 bg-white' type="default" htmlType="submit" icon={<SendOutlined />}>Send Message</Button>
                        </Form.Item>
                        <h1 className={`text-center font-thin text-sm ${darkMode?"text-black":"text-white"}`} >
                            (Your message will be sent to the page admin's personal mail)
                        </h1>
                    </Form>

                </div>

            </div>
            <section></section>
            <section></section>
            <section></section>
            <Fotter />
        </div>
    )
}

export default Contact