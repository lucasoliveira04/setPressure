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

    const scheduleEmailAt = (hour, minute) => {
        const now = new Date();
        const targetTime = new Date(now);
        targetTime.setHours(hour, minute, 0, 0);

        if (targetTime <= now) {
            targetTime.setDate(now.getDate() + 1);
        }

        const delay = targetTime - now;

        setTimeout(() => {
            sendEmail();
            scheduleEmailAt(hour, minute); 
        }, delay);
    };

    useEffect(() => {
        scheduleEmailAt(10, 0); 
        scheduleEmailAt(22, 0); 
    }, []);

    return null;
};
