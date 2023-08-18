import React, { useEffect, useState} from 'react';
import db from '../../firebase';
import './PlansScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {

    const user = useSelector(selectUser);
    console.log(user);
    const [products, setProducts] = useState([]);

    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds
                })
            })
        })
    });

    useEffect(() => {
        db.collection('products').where('active','==',true).get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceID : price.id,
                        priceData: price.data
                    }
                })
            });
            setProducts(products);
        });
    },[]);

    console.log(products);
    console.log(subscription);

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                // Show an error to the user
                alert(`An error occured: ${error.message}`);
            }

            if (sessionId) {
                // There is a session, redirect to Checkout
                // Init Stripe
                
                const stripe = await loadStripe(
                    "pk_test_51NgEIcH0cc4Zxi4xVi9L4kqSTnmJTLLisEWWH3XtDWB0GpPXaZ6FW7V6re21XdiPpF6SpZAU45FMT0HiHs1uNyit00rtcm3JqN"
                    );
                stripe.redirectToCheckout({sessionId});
            }
        })
    };

    return (
        <div className='planScreen'>
        <br />
            {subscription && (
                <p>
                    Renewal Date:{" "}
                    {
                        new Date(subscription?.current_period_end * 1000).toLocaleDateString()
                    }
                </p>
            )}
            {Object.entries(products).map(([productId, productData]) => {
                console.log(productData);
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

                return (
                    <div key={productId} className={`planScreen__plan ${isCurrentPackage && "plansScreen__plan--disabled"}`}>
                        <div className='planScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>                        

                        <button
                            onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceID)}>
                                {isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen;