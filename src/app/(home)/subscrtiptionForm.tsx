"use client";
import { Button } from "@/Components/button";
import { InputField, InputIcon, InputRoot } from "@/Components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";


const subscriptionSchema = z.object({
	name: z.string().min(2, "O seu nome deve ter pelo menos tres letras"),
	email: z.string().email("Digite e-mail valido"),
});
type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
export function SubscriptionForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	});

	function onSubcription(data: SubscriptionSchema) {
		console.log(data);
	}
	return (
		<form
			onSubmit={handleSubmit(onSubcription)}
			className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>
			<div className="space-y-3">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Escreve nome completo"
							{...register("name")}
						/>
					</InputRoot>
					{errors.name && (
						<span className="text-danger text-xs font-semibold">
							{errors.name.message}
						</span>
					)}
				</div>
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail />
						</InputIcon>
						<InputField
							type="mail"
							placeholder="Escreve o seu email"
							{...register("email")}
						/>
					</InputRoot>
					{errors.email && (
						<span className="text-danger text-xs font-semibold">
							{errors.email.message}
						</span>
					)}
				</div>
			</div>
			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}
