import React, { useEffect, useState} from 'react';

import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/utils';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>
                if you have any question, please email us auto
                <a className='email' href='mailto:lordauster1@gmail.com'>lordauster1@gmail.com</a>
            </p>
            <Link href='/'>
                <button className='btn' width='300px' type='button'>
                    Continue Shopping
                </button>
            </Link>
        </div>

    </div>
    )
}

export default Success