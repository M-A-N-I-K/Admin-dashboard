import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Tooltip,
} from "@material-tailwind/react";
const users = [
	{
		name: "User 1",
		email: "user1@gmail.com",
		phoneNo: 9123417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
	{
		name: "User 2",
		email: "user2@gmail.com",
		phoneNo: 9983417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
	{
		name: "User 3",
		email: "user3@gmail.com",
		phoneNo: 9123417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
	{
		name: "User 4",
		email: "user4@gmail.com",
		phoneNo: 9123417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
	{
		name: "User 5",
		email: "user5@gmail.com",
		phoneNo: 9123417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
	{
		name: "User 6",
		email: "user6@gmail.com",
		phoneNo: 9123417611,
		imgURL:
			"https://img2link.com/images/2023/03/25/262d0aa224b7a7067a9f2ed093907d90.jpg",
	},
];

export default function userCard() {
	return (
		<div className="grid xl:grid-cols-3 l:grid-cols-3 md:grid-cols-2 s:grid-cols-1 gap-x-24 gap-y-24 p-10 justify-center content-center">
			{users.map((user) => {
				return (
					<Card className="max-w-[24rem] overflow-hidden">
						<CardHeader
							floated={false}
							shadow={false}
							color="transparent"
							className="m-0 rounded-none object-contain"
						>
							<img src={user.imgURL} alt="User Picture" />
						</CardHeader>
						<CardBody>
							<Typography variant="h4" color="blue-gray">
								{user.name}
							</Typography>
							<Typography
								variant="lead"
								color="gray"
								className="mt-3 font-normal"
							>
								{user.email}
							</Typography>
							<Typography className="font-normal">
								{user.phoneNo}
							</Typography>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
}
