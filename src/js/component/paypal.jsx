import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const PayPal = props => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			let myprice = store.finalPrice.toFixed(2).toString();
			console.log(myprice);
			window.paypal
				.Buttons({
					createOrder: (data, action, err) => {
						return action.order.create({
							intent: "CAPTURE",
							purchase_units: [
								{
									description: props.description,
									reference_id: props.book_number,
									amount: {
										currenci_code: "EUR",
										value: myprice
									}
								}
							]
						});
					},
					onApprove: async (data, action) => {
						const order = await action.order.capture();
						console.log("MY ORDER: ", order);
					},
					onError: err => {
						console.error(err);
					}
				})
				.render("#paypal-button");
		},
		[store.finalPrice]
	);
	if (store.finalPrice == 0) return null;
	else {
		return <div id="paypal-button" />;
	}
};
PayPal.propTypes = {
	description: PropTypes.string,
	book_number: PropTypes.number
};
