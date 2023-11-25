// Dependencies.
import { prisma } from "./"

// Types.
type Donor = {
	donorId: string
	donorEmail: string
	donorFirstName: string
	donorLastName: string
}

// Update the donor in the database.
export async function updateDonor(
	customerId: string,
	customerEmail: string,
	customerFirstName: string,
	customerLastName: string,
): Promise<Donor> {
	// Update the existing donor.
	const donor = await prisma.donor.update({
		where: {
			donorId: customerId,
		},
		data: {
			donorEmail: customerEmail,
			donorFirstName: customerFirstName,
			donorLastName: customerLastName,
		},
	})

	// Return the updated donor.
	return {
		donorId: donor.donorId,
		donorEmail: donor.donorEmail,
		donorFirstName: donor.donorFirstName,
		donorLastName: donor.donorLastName,
	}
}

// Insert the donor in the database.
export async function insertDonor(
	customerId: string,
	customerEmail: string,
	customerFirstName: string,
	customerLastName: string,
) {
	// Insert the new donor.
	const donor = await prisma.donor.create({
		data: {
			donorId: customerId,
			donorEmail: customerEmail,
			donorFirstName: customerFirstName,
			donorLastName: customerLastName,
		},
	})

	// Return the new donor.
	return {
		donorId: donor.donorId,
		donorEmail: donor.donorEmail,
		donorFirstName: donor.donorFirstName,
		donorLastName: donor.donorLastName,
	}
}
