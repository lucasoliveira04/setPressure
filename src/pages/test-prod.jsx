import React, { useState, useEffect } from 'react';

export const TestProd = ({ emailSend }) => {
    const [response, setResponse] = useState(null);

    const sendEmail = async () => {
        const data = {
            configurationMail: {
                host: "smtp.gmail.com",
                port: "587",
                username: "camposdlucasoli@gmail.com",
                password: "kwqjsnlelyhchkzp",
                supportMail: "camposdlucasoli@gmail.com"
            },
            emailRequest: {
                title: "Feedback Portfolio",
                message: "Sua mensagem aqui",
                contacts: emailSend,
                subject: "TIRE A PRESSÃO",
                nameProjectOrNameBusiness: "Portfoliooo"
            },
            typeMessage: "MESSAGE_PRESSURE"
        };

        try {
            const response = await fetch('https://api-send-email-46gw.onrender.com/api/send/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const textResponse = await response.text();
                setResponse(textResponse);
            } else {
                console.error('Erro ao enviar o e-mail:', response.status);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    const scheduleEmailAt = () => {

        setTimeout(() => {
            sendEmail();
            console.log('Email enviado');
        }, 1000);
    };

    useEffect(() => {
        scheduleEmailAt(); 
    }, [response]);

    return null;
};
