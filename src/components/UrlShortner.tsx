'use client'
import React, { useEffect, useState } from 'react'
import bgShorten from '@/assets/bg-shorten.png'
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from 'nanoid';
import Link from 'next/link';
import confetti from '@/assets/confetti.png'
import Image from 'next/image';
import { useTheme } from "next-themes"


const UrlShortner = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const currentTheme = mounted ? theme === "system" ? systemTheme : theme : 'light';
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [userInputUrl, setUserInputUrl] = useState('')
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [repeateUrl, setRepeatUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [isBlankURL, setIsBlankUrl] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (url.trim() !== '') {
            setIsBlankUrl(false);
        }
    }, [url])

    function handleSubmit() {
        if (url.trim() == '') {
            setIsBlankUrl(true);
            return;
        }
        setUserInputUrl(url)
        const code = nanoid(6);
        setShortUrl(code);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": code
        });

        const requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        setLoading(true);
        fetch("api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setRepeatUrl('')
                setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${code}`);
                if (result.error) {
                    setUserInputUrl('')
                    setGeneratedUrl('');
                    setRepeatUrl(result.message);
                }
            })
            .catch((error) => {
                console.error(error);
                setUserInputUrl('')
                setGeneratedUrl('');
                setRepeatUrl(error.message);
            }).finally(() => {
                setLoading(false);
            });


        setUrl('');
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(generatedUrl)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch((err) => console.error("Copy failed:", err));
    };
    return (
        <div className='py-10 relative px-5'>
            <div className='flex flex-col gap-5 justify-center items-center max-w-[1000px] mx-auto w-full relative'>
                <div className='w-full rounded-lg bg-[#4b3f6bdf] flex lg:flex-row flex-col gap-2 justify-center items-center lg:py-10 py-5 p-2 absolute -top-27 backgr' style={{ backgroundImage: `url(${bgShorten.src})` }}>
                    <div className={`flex  md:w-[80%] w-[95%] items-center justify-center rounded-full p-0.5 ${currentTheme === 'light' ? 'bg-white' : 'bg-[#14181f]'} border-gray-300 border-3 relative`}>
                        <span className='absolute left-4'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></span>
                        <input className='py-3 w-full lg:pr-[320px] pr-5 pl-13  border-none focus:outline-[0px]  rounded-l-full' type="text" name='' id='' placeholder='Enter the URL here' value={url} onChange={(e) => setUrl(e.target.value)} required />
                    </div>
                    <button className='lg:absolute right-28 lg:w-[300px] md:w-[80%] w-[95%] bg-green-700 hover:bg-green-800 text-white font-semibold md:px-10 px-5 py-3 rounded-full  active:scale-[0.98] duration-200' onClick={handleSubmit}>Shorten Now!</button>
                    {isBlankURL && <p className='absolute -bottom-6 left-5 text-red-600 text-[13px] font-[600] text-sm'>Please enter the URL first</p>}
                    {loading && <p className='absolute -bottom-6 left-5 text-[13px] font-[600] text-sm'>Generating...</p>}
                </div>
                <div className='w-full flex flex-col gap-3 text-[15px] lg:mt-20 mt-25'>
                    {generatedUrl &&
                        <div className={`flex md:flex-row flex-col justify-between gap-2 items-start ${currentTheme === 'light' ? 'bg-white' : 'bg-[#14181f]'} px-5 py-3 rounded-lg`}>
                            <code className='font-[600] w-full md:max-w-[60%] break-words'>
                                {userInputUrl}
                            </code>
                            <div className='flex sm:flex-nowrap flex-wrap  items-center gap-4'>
                                <Link target='_blank' href={shortUrl} className='flex items-center gap-2'>
                                    <code className='text-[#093ada] hover:underline font-[600]'>{generatedUrl}
                                    </code>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#093ada" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                                </Link>

                                <div className='relative'>
                                    <button
                                        disabled={copied}
                                        className={`px-5 py-1 rounded-lg border-[1px] duration-100 ${currentTheme === 'light' ? 'border-[#bbb5b5]' : 'border-[#bbb5b544]'} ${currentTheme === 'light'
                                            ? copied
                                                ? 'bg-[#efeded]'
                                                : 'bg-white hover:bg-[#efeded]'
                                            : copied ? 'bg-[#1b212a]' : 'bg-[#14181f] hover:bg-[#1b212a]'
                                            }`}
                                        onClick={copyToClipBoard}
                                    >
                                        {copied ? 'copied' : 'copy'}
                                    </button>

                                    <AnimatePresence>
                                        {copied && (
                                            <motion.div
                                                initial={{ opacity: 1, scale: 0.5, translateY: 0, translateX: 0 }}
                                                animate={{ opacity: 0, scale: 2, translateY: -20, translateX: -20 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="absolute inset-0 top-0 right-0 w-full flex items-center justify-center pointer-events-none">
                                                <Image src={confetti} className='absolute right-0 w-[25px]' alt='' />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    }

                    {repeateUrl && <code className='text-red-600 font-[600] text-sm'>{repeateUrl}</code>}
                </div>
            </div>
        </div>
    )
}

export default UrlShortner;
