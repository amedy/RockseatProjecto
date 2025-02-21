"use client";
import { IconButton } from "@/Components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/Components/input";
import { Copy, Link, Medal } from "lucide-react";
interface InviteLinkInputprops {
	inviteLink: string;
}
export function InviteLinkInput({ inviteLink }: InviteLinkInputprops) {
	function copyInviteLink() {
		navigator.clipboard.writeText(inviteLink);
	}
	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>
			<InputField readOnly defaultValue={inviteLink} />
			<IconButton className="-mr-2" onClick={copyInviteLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
