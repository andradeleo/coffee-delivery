import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import CompleteOrderPage from "./pages/CompletOrder";
import HomePage from "./pages/home";
import OrderConfirmedPage from "./pages/OrderConfirmed";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/completeOrder" element={<CompleteOrderPage />} />
				<Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
			</Route>
		</Routes>
	);
}
