import React, { useState, useEffect } from 'react';
import "./User.scss"

const User = () => {
    const [name, setName] = useState('');
    const [familiya, setFamiliya] = useState('');
    const [telefon, setTelefon] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setFamiliya(e.target.value);
    };

    const handleMessageChange = (e) => {
        setTelefon(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendTelegram();
        setName('');
        setFamiliya('');
        setTelefon('');
        setIsRegistered(true);
    };

    const handleSignOut = () => {
        setIsRegistered(false);
    };

    const sendTelegram = () => {
        const telegramBotId = '6180012070:AAG_kzZTKOUa50-QUjrU6DSRIYJP2Zsmofw';
        const chatId = '5445056736';
        const messageText = `Ro'yxatdan o'tdi✅ \nIsmi: ${name}\nFamiliya: ${familiya}\nTelefon raqam: ${telefon}`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: messageText }),
        };

        fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, requestOptions)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    useEffect(() => {
        const isUserRegistered = localStorage.getItem('isRegistered'); // Avvalgi ro'yxatdan o'tish holatini olish
        if (isUserRegistered === 'true') {
            setIsRegistered(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isRegistered', isRegistered); // Ro'yxatdan o'tish holatini saqlash
    }, [isRegistered]);

    if (isRegistered) {
        return (
            <div className="create_client">
                <h1>Ro'yxatdan o'tganingiz uchun rahmat!</h1>
                <a href="/"><button className='btn'>Asosiy menuga qaytish</button></a>
                <button className='btn' onClick={handleSignOut}>Chiqish</button>
            </div>
        );
    }

    return (
        <div className="create_client ">
            <h1>Ro'yxatdan o'tish</h1>
            <div className='create_cli'>
                <form onSubmit={handleSubmit}>
                    <h3>Ism</h3>
                    <input
                        placeholder="Ism"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <h3>Familiya</h3>
                    <input
                        placeholder="Familiya"
                        value={familiya}
                        onChange={handleEmailChange}
                        required
                    />
                    <h3>Telefon Raqami</h3>
                    <input
                        type="number"
                        placeholder="Telefon raqam"
                        value={telefon}
                        onChange={handleMessageChange}
                        required
                    />
                    <button type="submit" value="Yuborish" id="btn">Ro'yxatdan o'tish</button>
                </form>
            </div>
        </div>
    );
};

export default User;
