import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
const users = [
	{
		name: "Balram nath",
		email: "balramnath1@gmail.com",
		phoneNo: 9982345622,
		imgURL:
			"https://tse4.mm.bing.net/th?id=OIP.nBy6dlY-QZFYSVqz6SLpRQHaID&pid=Api&P=0",
	},
	{
		name: "Rajvinder Singh",
		email: "rajvindersingh2@gmail.com",
		phoneNo: 9876054321,
		imgURL:
			"https://tse4.mm.bing.net/th?id=OIP.QUVtHmMXSY0hSOQy7c1M_gHaEK&pid=Api&P=0",
	},
	{
		name: "Rajender Gupta",
		email: "rajendergupta3@gmail.com",
		phoneNo: 7780954632,
		imgURL:
			"https://tse3.mm.bing.net/th?id=OIP.ner6W-ZPVQD3ByLh-WC-JQHaL2&pid=Api&P=0",
	},
	{
		name: "Saurabh Tiwari",
		email: "saurabhtiwari4@gmail.com",
		phoneNo: 7780966666,
		imgURL:
			"https://tse3.mm.bing.net/th?id=OIP._c5S9Pp3at_4yHib4SzTSQE8DF&pid=Api&P=0",
	},
	{
		name: "Mohit chabra",
		email: "mohitchabra5@gmail.com",
		phoneNo: 9971965342,
		imgURL:
			"https://tse1.mm.bing.net/th?id=OIP.KP5NUfMG2pCV0OizF7SDIQAAAA&pid=Api&P=0",
	},
	{
		name: "Rohit pandey",
		email: "rohitpandey6@gmail.com",
		phoneNo: 9976543809,
		imgURL:
			"https://tse1.mm.bing.net/th?id=OIP.PardoSo-g6vBDPNh7kGEcwHaEj&pid=Api&P=0",
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
							className="m-0 h-64 rounded-none"
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
